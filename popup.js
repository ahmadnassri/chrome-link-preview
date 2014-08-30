function closePopup (event) {
  chrome.runtime.sendMessage({
    action: 'hide-preview'
  });
};

(function (win, doc) {
  var link = doc.querySelector('a.embedly-card');
  var url = decodeURIComponent(win.location.search.replace(/^\?/,''));

  if (/^https:/.test(url)) {
    link.parentNode.removeChild(link);
    var message = doc.createElement('p');
    message.innerHTML = 'Sorry, currently this extension does not work with HTTPS URLs, due to an issue with <a href="https://twitter.com/embedly" target="_blank">Embedly</a> Cards, we are working on an update with Embedly\'s help!<br/>Thanks for your patience.';

    doc.querySelector('.container').appendChild(message);
  } else {
    doc.querySelector('a.embedly-card').href = url;

    var script = doc.createElement('script');
    script.src = 'https://cdn.embedly.com/widgets/platform.js';

    doc.body.appendChild(script);

  }

  doc.body.addEventListener('click', closePopup);
  doc.querySelector('button.close').addEventListener('click', closePopup);
})(window, document);
