// background.js
function showNotification() {
    chrome.notifications.create('', {
        type: 'basic',
        iconUrl: 'icon.png',
        title: '保存成功',
        message: '推文已成功保存到 Flomo'
    });
}

chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "saveToFlomo",
        title: "保存到 Flomo",
        contexts: ["all"]
    });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "saveToFlomo") {
        chrome.tabs.sendMessage(tab.id, {action: "getTweetText"}, function(response) {
            if (response) {
                showNotification();
            }
        });
    }
});

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "sendToFlomo") {
        chrome.storage.sync.get(['flomoUrl', 'contentPrefix'], (items) => {
            const content = `${items.contentPrefix}\n${request.content}\nURL: ${sender.tab.url}`;
            sendToFlomo(items.flomoUrl, content, function(response) {
                if (response) {
                    sendResponse({ status: "Success" });
                } else {
                    sendResponse({ status: "Error" });
                }
            });
        });
        return true;
    }
});

function sendToFlomo(flomoUrl, content, callback) {
    fetch(flomoUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ content: content })
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        callback(true);
    })
    .catch(error => {
        console.error('Error:', error);
        callback(false);
    });
}
