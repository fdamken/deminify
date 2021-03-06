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
        var url = details.url.replace('.min.css', '.css').replace('.min.js', '.js');
        if (details.url !== url) {
            return {
                redirectUrl: url
            };
        }
    }
}, {
    urls: [
        '<all_urls>'
    ]
}, [
    'blocking'
]);
