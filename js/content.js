chrome.storage.sync.get({
  delay: 2000,
  greyscale: 100,
  nuclear: false,
  message: 'Shouldn\'t you be doing something else?',
  urls: ['facebook.com', 'reddit.com', 'imgur.com', 'instagram.com', 'mail.google.com', 'pinterest.com', 'amazon.com', 'feedly.com', 'buzzfeed.com', 'thisiswhyimbroke.com', 'iwastesomuchtime.com', 'pinterest.com', 'failblog.org', 'overstock.com', 'popcap.com'],
  // DEFAULTS - also change in options.js
}, init);

function init(settings) {
  var siteIsActive = settings.urls.some((check) => window.location.href.indexOf(check) >= 0);
  if (siteIsActive) {
    var div = document.createElement('div');
    div.id = "antiaddiction";
    div.innerHTML = settings.message;
    div.style.cssText = `
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      z-index: 100;
      background: #FFF;
      color: #000;
      padding: 5%;
      font-family: "Century Gothic", CenturyGothic, AppleGothic, sans-serif;
      font-size: 2em;
      text-align: center;
      z-index: 2147483647;
    `;
    document.body.appendChild(div);

    setTimeout(() => {
      var elem = document.querySelector('#antiaddiction');
      if (elem) {
        elem.parentNode.removeChild(elem);
      }
    }, settings.delay);
  }

  if (settings.greyscale && (siteIsActive || settings.nuclear)) {
    document.body.style.cssText = document.body.style.cssText + ` filter: grayscale(${settings.greyscale}%);`;
  }
}