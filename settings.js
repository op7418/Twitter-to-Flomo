// settings.js
document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.sync.get(['flomoUrl', 'contentPrefix'], (items) => {
        document.getElementById('flomoUrl').value = items.flomoUrl || '';
        document.getElementById('contentPrefix').value = items.contentPrefix || '';
    });
});

document.getElementById('saveSettings').addEventListener('click', () => {
    let flomoUrl = document.getElementById('flomoUrl').value;
    let contentPrefix = document.getElementById('contentPrefix').value;

    chrome.storage.sync.set({ flomoUrl, contentPrefix }, () => {
        document.getElementById('status').textContent = 'Settings saved.';
    });
});
