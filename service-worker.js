
chrome.runtime.onMessage.addListener(function(request) {
    if (request.type === 'updateAllTabs') {
        chrome.tabs.query({}, function(tabs) {
            for (let tab of tabs) {
                if(!tab.url || !tab.url.startsWith('http'))
                    return;

                chrome.scripting.executeScript({
                    target : { tabId : tab.id },
                    files : [ "scripts/script.js" ],
                });
            }
        });
    }
});
