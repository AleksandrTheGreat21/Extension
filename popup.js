chrome.browserAction.onClicked.addListener(function(tab) {

  while (true) {
  chrome.tabs.create({ url: "https://www.google.com" }); 
    }

});
