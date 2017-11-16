'use strict';

app.home = kendo.observable({
    onShow: function() {},
    afterShow: function() {
        var selectedPlazaCookie = getCookie("initial");

        if (selectedPlazaCookie==""){
            app.mobileApp.navigate('components/menuView/view.html');
        }

        changeColor(selectedPlazaCookie);
        logoPlaza(selectedPlazaCookie, "logoCentroComercial");
        $("#selectedPlazaHome").val(selectedPlazaCookie);

        $("#selectedPlazaHome").change(function() { 
            changeColor($("#selectedPlazaHome").val());
            logoPlaza($("#selectedPlazaHome").val(), "logoCentroComercial");
            setCookie("initial",$("#selectedPlazaHome").val(),30);
        });
    }
});
app.localization.registerView('home');

// START_CUSTOM_CODE_home
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_home