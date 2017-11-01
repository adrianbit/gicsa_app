'use strict';

app.eventosView = kendo.observable({
    onShow: function() {},
    afterShow: function() {
        var selectedPlazaCookie = getCookie("initial");
        changeColor(selectedPlazaCookie);
        $("#selectedPlazaEventos").val(selectedPlazaCookie);
        $("#selectedPlazaEventos").change(function() { changeColor($("#selectedPlazaEventos").val()); });
    }
});
app.localization.registerView('eventosView');

// START_CUSTOM_CODE_eventosView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_eventosView