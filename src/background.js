var enabled = false;
chrome.browserAction.onClicked.addListener(function () {
    if (enabled = !enabled) {
        chrome.browserAction.setIcon({
            path: 'icon/icon128.png'
        });

        alert('Deminify enabled! Please reload the page.');
    } else {
        chrome.browserAction.setIcon({
            path: 'icongray/icongray128.png'
        });
    }
});

chrome.webRequest.onBeforeRequest.addListener(function (details) {
    if (enabled) {
        return {
            redirectUrl: 
        };
    }
}, {
    urls: [
        '<all_urls>'
    ]
}, [
    'blocking'
]);
