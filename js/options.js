"use strict";

// Restores select box and checkbox state using the preferences stored in chrome.storage.
function restore_options() {
  chrome.storage.sync.get({
    delay: 10000,
    message: 'Don\'t feed the addiction!',
    urls: ['facebook.com', 'reddit.com', 'imgur.com', 'instagram.com', 'mail.google.com', 'pinterest.com', 'amazon.com'],
    version: '0.1.0',
    // DEFAULTS - also change in content.js
  }, (items) => {
    document.getElementById('delay').value = Math.round(items.delay / 1000);
    document.getElementById('message').value = items.message;
    document.getElementById('urls').value = items.urls.join(',');
  });
}

// Saves options to chrome.storage.sync.
function save_options() {
  const button = document.getElementById('save');
  button.disabled = true;
  button.innerHTML = '...';

  chrome.storage.sync.set({
    delay: document.getElementById('delay').value * 1000,
    message: document.getElementById('message').value,
    urls: document.getElementById('urls').value.split(',').map((url) => url.trim()),
  }, () => {
    // Update status to let user know options were saved.
    button.innerHTML = 'Saved!';
    setTimeout(() => {
      button.innerHTML = 'Save';
      button.disabled = false;
    }, 800);
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click', save_options);
