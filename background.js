/*
 * EarthStation v1.0
 * (c) 2014 William Ye & Julie T. Do @ UCSC
 * https://github.com/Putnameshere/EarthStation
 *
 * EarthStation v0.3
 * (c) 2013 Shashwat Kandadai and UCSC
 * https://github.com/shashwatak/EarthStation
 * License: MIT
 */

chrome.app.runtime.onLaunched.addListener(function(launchData) {
  chrome.app.window.create('index.html', {width: 1400, height: 850}, function(win) {
    win.contentWindow.launchData = launchData;
  });
});
