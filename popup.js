function closePopup (event) {
  chrome.runtime.sendMessage({
    action: 'hide-preview'
  });
};

(function (win, doc) {
  doc.querySelector('a.embedly-card').href = decodeURIComponent(win.location.search.replace(/^\?/,''));

  var script = doc.createElement('script');
  script.src = 'https://cdn.embedly.com/widgets/platform.js';

  doc.body.appendChild(script);

  doc.body.addEventListener('click', closePopup);
  doc.querySelector('button.close').addEventListener('click', closePopup);
})(window, document);
