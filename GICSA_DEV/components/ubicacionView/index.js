'use strict';

app.ubicacionView = kendo.observable({
    onShow: function() {},
    afterShow: function() {
        var selectedPlazaCookie = getCookie("initial");
        changeColor(selectedPlazaCookie);
        $("#selectedPlazaUbicacion").val(selectedPlazaCookie);
        $("#selectedPlazaUbicacion").change(function() { 
            changeColor($("#selectedPlazaUbicacion").val());
            mapIframe($("#selectedPlazaUbicacion").val(),"ubicacionIframe"); 
        });
        //mapIframe(selectedPlazaCookie,"ubicacionIframe");
    }
});
app.localization.registerView('ubicacionView');

// START_CUSTOM_CODE_ubicacionView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_ubicacionView