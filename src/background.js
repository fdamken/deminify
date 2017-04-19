var enabled = false;
chrome.browserAction.onClicked.addListener(function () {
    if (enabled = !enabled) {
        chrome.browserAction.setIcon({
            path: 'src/icon/icon128.png'
        });
    } else {
        chrome.browserAction.setIcon({
            path: 'src/icongray/icongray128.png'
        });
    }
});

chrome.webRequest.onBeforeRequest.addListener(function (details) {
    if (enabled && details.url) {
        return {
            redirectUrl: details.url.replace('.min.css', '.css').replace('.min.js', '.js')
        };
    }
}, {
    urls: [
        '<all_urls>'
    ]
}, [
    'blocking'
]);
