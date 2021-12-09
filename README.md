# Autodesk Authorization Header Extractor

**This is NOT an official Autodesk product, and is not related to Autodesk in any way**

Chrome extension that extracts the authorization header from open BIM 360 or Autodesk Construction Cloud tabs. These tokens can later be used to manually send requests to Forge. To add the extension to your browser, visit the [Chrome web store]

# Known issues
* [Issue #1024211](https://bugs.chromium.org/p/chromium/issues/detail?id=1024211) in Chromium prevents service worker to read the auth header. There are [ways to work-around this issue](https://stackoverflow.com/questions/66618136/persistent-service-worker-in-chrome-extension), also we hope the issue #1024211 will get resolved eventually.