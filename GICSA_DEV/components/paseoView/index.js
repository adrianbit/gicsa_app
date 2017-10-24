'use strict';

app.paseoView = kendo.observable({
    onShow: function() {},
    afterShow: function() {
        $("#selectedPlazaPaseo").change(function() { goToView($("#selectedPlazaPaseo").val()); });
    }
});
app.localization.registerView('paseoView');

// START_CUSTOM_CODE_paseoView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_paseoView