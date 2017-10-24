'use strict';

app.explanadaView = kendo.observable({
    onShow: function() {},
    afterShow: function() {
        $("#selectedPlazaExplanada").change(function() { goToView($("#selectedPlazaExplanada").val()); });
    }
});
app.localization.registerView('explanadaView');

// START_CUSTOM_CODE_explanadaView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_explanadaView