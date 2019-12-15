# Anti-Addiction Chrome Extension

Free yourself from digital addiction by slowing down websites that are trying to steal your focus. Get it free on the [Chrome Extension Store](https://chrome.google.com/webstore/detail/world-view-wallpaper-tab/bdnobddpgjhaenonjkngfhcknndajiia).

Made by [Fabricate.io](http://fabricate.io).

## Contributing

### Bugs? Ideas?

Create a new issue by going to Issues -> New Issue! Please try to be as comprehensive as possible, especially when reporting bugs. For example, what Operating System your computer is running, what version of Chrome you're using, and steps we can take to reliably reproduce the bug. This will help us fix the bug faster!

## Developers

### Running on your computer

Go to `chrome://extensions/`, make sure `developer mode` is enabled, click "load unpacked extension" and select this repo's main folder.

### Deploying

To compress for deploying:
- bump the version number in `manifest.json` and `options.js`
- commit changes to master
- run this from the repository root directory: `git archive -o extension.zip HEAD`

Then, upload `extension.zip` to the [Chrome Developer Dashboard](https://chrome.google.com/webstore/developer/dashboard)
