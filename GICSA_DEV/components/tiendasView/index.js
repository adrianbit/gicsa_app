'use strict';

app.tiendasView = kendo.observable({
    onShow: function() {},
    afterShow: function() {
        var selectedPlazaCookie = getCookie("initial");
        changeColor(selectedPlazaCookie);
        $("#selectedPlazaTiendas").val(selectedPlazaCookie);
        $("#selectedPlazaTiendas").change(function() { changeColor($("#selectedPlazaTiendas").val()); });
    }
});
app.localization.registerView('tiendasView');

// START_CUSTOM_CODE_tiendasView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_tiendasView