define(['jquery'], function ($) {
    $(document).on("mobileinit", function () {
        $.mobile.ajaxEnabled = false;
        $.mobile.hashListeningEnabled = false;
        $.mobile.pushStateEnabled = false;
        $.mobile.linkBindingEnabled = false; //-- works properly with jqm 1.1.1 rc1

        $.mobile.defaultDialogTransition = "none";
        $.mobile.defaultPageTransition = "slidedown";
        $.mobile.page.prototype.options.degradeInputs.date = true;
        $.mobile.page.prototype.options.domCache = false;

        $.mobile.ignoreContentEnabled=true;
    });
});