
var Sai = require("sai");

var win = window;

Sai.on("jserror", function(err){

  var category = "jserror"
  var action = err.msg;
  var label = err.file + "#L" + err.line;

  var cached = false;

  if (win._gat && win._gat._getTracker) { // version too old.

  } else if (win._gaq && win._gaq.push) { // old version.

    win._gaq.push(['_trackEvent', category, action, label]);
    cached = true;

  } else if ("function" === typeof win.ga) { // universal analytics.

    win.ga('send', 'event', category, action, label)
    cached = true;

  }

  err.cached = cached;
});
