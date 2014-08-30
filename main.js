// ping pong
chrome.runtime.onMessage.addListener(function (request) {
  if (request.action === 'hide-preview') {
    chrome.tabs.query({active: true, currentWindow: true}, function (tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {
        action: 'hide-preview'
      });
    });
  }
});

// attach event
chrome.contextMenus.create({
  title: 'Show Preview',
  contexts: ['link'],
  onclick: function showPreview (info, tab) {
    chrome.tabs.sendMessage(tab.id, {
      action: 'show-preview',
      info: info
    });
  }
});
