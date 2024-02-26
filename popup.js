// popup.js
document.getElementById('sendButton').addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {action: "getTweetText"}, function(response) {
            if (response) {
                document.getElementById('status').innerText = 'Saved';
            }
        });
    });
});

document.getElementById('settingsButton').addEventListener('click', function() {
    // 打开设置页面的逻辑
    window.open('settings.html');
});