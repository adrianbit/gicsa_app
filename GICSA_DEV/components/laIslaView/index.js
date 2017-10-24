'use strict';

app.laIslaView = kendo.observable({
    onShow: function() {},
    afterShow: function() {
        $("#selectedPlazaIsla").change(function() { goToView($("#selectedPlazaIsla").val()); });
    }
});
app.localization.registerView('laIslaView');

// START_CUSTOM_CODE_laIslaView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_laIslaView