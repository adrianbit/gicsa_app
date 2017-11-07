'use strict';

app.contactoView = kendo.observable({
    onShow: function() {},
    afterShow: function() {
        var selectedPlazaCookie = getCookie("initial");
        //changeColor(selectedPlazaCookie);
        mapIframe(selectedPlazaCookie,"contactoIframe");
        $(".insideHeader").css("background-image","linear-gradient(to right, #f6a426 0%, #ff8a00 100%)");
        $(".insideGrid").css("background-image","linear-gradient(to right, #f6a426 0%, #ff8a00 100%)");
        $(".km-content").css("background-color","#fb9611");
    }
});
app.localization.registerView('contactoView');

// START_CUSTOM_CODE_contactoView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_contactoView