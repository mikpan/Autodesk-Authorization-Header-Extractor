
chrome.webRequest.onBeforeSendHeaders.addListener(
  function (info) {
    if (info.requestHeaders) {
      for(var i = 0; i < info.requestHeaders.length; i++) {
        let headerName = info.requestHeaders[i].name;
        if(headerName === 'Authorization' || headerName === 'authorization') {
          console.log(info.requestHeaders[i].value);
          chrome.storage.local.set({ 'tokenObj': { 'token': info.requestHeaders[i].value, 'date': new Date().toLocaleTimeString() } });
          break;
        }
      }
    }
  },
  // filters
  {
    urls: [
      "https://*.autodesk.com/*",
    ]
  },
  ["requestHeaders"]);
