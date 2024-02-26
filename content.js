// content.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "getTweetText") {
        let tweetText = getTweetText();
        chrome.runtime.sendMessage({action: "sendToFlomo", content: tweetText});
        sendResponse({status: "Message sent"});
    }
});

function getTweetText() {
    // 获取第一个div[data-testid="tweetText"]下所有style="text-overflow: unset;"的span内容
    let tweetText = '';
    const tweetDiv = document.querySelector('div[data-testid="tweetText"]');
    if (tweetDiv) {
        const spans = tweetDiv.querySelectorAll('span[style="text-overflow: unset;"]');
        spans.forEach(span => {
            tweetText += span.textContent + '\n';
        });
    }
    return tweetText.trim();
}
