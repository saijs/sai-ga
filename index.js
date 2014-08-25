
var Sai = require("sai");

var win = window;

Sai.on("jserror", function(err){

  var category = "jserror"
  var action = err.msg;
  var label = err.file + "#L" + err.line;

  var cached = false;

  var _gat = win._gat;
  var _gaq = win._gaq;
  var ga = win.ga;

  if (_gat && _gat._getTracker) { // version too old.

  } else if (_gaq && typeof _gaq.push === "function") { // old version.

    _gaq.push(['_trackEvent', category, action, label]);
    cached = true;

  } else if ("function" === typeof ga) { // universal analytics.

    ga('send', 'event', category, action, label)
    cached = true;

  }

  err.cached = cached;
});
