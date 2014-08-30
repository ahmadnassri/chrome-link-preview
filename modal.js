var style = 'border: none; height: 100%; width: 100%; position: fixed !important; z-index: 2147483646; top: 0px; left: 0px; display: block !important; max-width: 100% !important; max-height: 100% !important; padding: 0px !important; background: none rgba(0, 0, 0, 0.0980392);';

chrome.runtime.onMessage.addListener(function (request) {
  switch (request.action) {
    case 'show-preview':
      var frame = document.createElement('iframe');
      frame.id = 'chrome-link-preview';
      frame.src = chrome.runtime.getURL('popup.html?' + encodeURIComponent(request.info.linkUrl));
      frame.setAttribute('style', style);

      document.body.appendChild(frame);

      break;

    case 'hide-preview':
      var frame = document.querySelector('#chrome-link-preview');

      if (frame) {
        frame.parentNode.removeChild(frame);
      }
      break;
  }
});
