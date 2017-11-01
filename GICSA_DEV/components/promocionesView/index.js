'use strict';

app.promocionesView = kendo.observable({
    onShow: function() {},
    afterShow: function() {
        var selectedPlazaCookie = getCookie("initial");
        changeColor(selectedPlazaCookie);
        $("#selectedPlazaPromociones").val(selectedPlazaCookie);
        $("#selectedPlazaPromociones").change(function() { changeColor($("#selectedPlazaPromociones").val()); });
    }
});
app.localization.registerView('promocionesView');


// START_CUSTOM_CODE_promocionesView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_promocionesView