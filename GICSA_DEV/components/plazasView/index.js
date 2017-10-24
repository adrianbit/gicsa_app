'use strict';

app.plazasView = kendo.observable({
    onShow: function() {},
    afterShow: function() {
        $("#selectedPlazaPlazas").change(function() { goToView($("#selectedPlazaPlazas").val()); });
    }
});
app.localization.registerView('plazasView');

// START_CUSTOM_CODE_plazasView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_plazasView