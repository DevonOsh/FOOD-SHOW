

(function (fsr) {
    var application,
        mobileSkin = "",
        app = fsr.app = fsr.app || {};
    
    document.addEventListener("deviceready", function () {
        navigator.splashscreen.hide();
        application = new kendo.mobile.Application(document.body, { transition: "", layout: "mobile-tabstrip"});
    }, false);
    

    app.setSkin = function (e) {
            e.sender.element.text("Native");
            fsr.app.chartsTheme = "flat";
            mobileSkin = "flat";
        application.skin(mobileSkin);
        application.view().show();
    };
    

    app.emToPx = function (input) {
        var emSize = parseFloat($("body").css("font-size"));
        return (emSize * input);
    };

    app.makeUrlAbsolute = function (url) {
        var anchorEl = document.createElement("a");
        anchorEl.href = url;
        return anchorEl.href;
    };
})(window);