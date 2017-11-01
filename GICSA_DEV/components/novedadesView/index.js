'use strict';

app.novedadesView = kendo.observable({
    onShow: function() {},
    afterShow: function() {
        var selectedPlazaCookie = getCookie("initial");
        changeColor(selectedPlazaCookie);
        $("#selectedPlazaNovedades").val(selectedPlazaCookie);
        $("#selectedPlazaNovedades").change(function() { changeColor($("#selectedPlazaNovedades").val()); });
    }
});
app.localization.registerView('novedadesView');

// START_CUSTOM_CODE_novedadesView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_novedadesView