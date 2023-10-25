(function (d, m) {
  var kommunicateSettings = {
    appId: "235a50e532fbb955ed479287ca9842961",
    popupWidget: true,
    automaticChatOpenOnNavigation: true,
    "onInit": function () {
        var events = {
            'onMessageReceived': function (resp) {
            console.log("onMessageReceived@@@",resp);
            },
            'onMessageSent': function (resp) {
            console.log("onMessageSent@@@",resp);
            }
        };
        Kommunicate.subscribeToEvents(events);
    },
  };
  var s = document.createElement("script");
  s.type = "text/javascript";
  s.async = true;
  s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
  var h = document.getElementsByTagName("head")[0];
  h.appendChild(s);
  window.kommunicate = m;
  m._globals = kommunicateSettings;
})

(document, window.kommunicate || {});


// Create a cookie for the entire webpage
document.cookie = "myCookie=myCookieValue; expires=Thu, 01 Jan 2099 00:00:00 UTC; path=/";


