'use strict';

app.forumView = kendo.observable({
    onShow: function() {},
    afterShow: function() {
        $("#selectedPlazaForum").change(function() { goToView($("#selectedPlazaForum").val()); });

        var urlService = "http://167.114.156.36/CustomServices/CentrosComerciales/CentrosService/GetPromocionesDestacadasByCentros/";
        var data = { "centros":"39137cf6-8270-400c-9099-16a4caf4ee81" };
 
        /**$.ajax({
            url: urlService,
            type: "POST",
            data: data
        }).done(function(xhr) {
            alert(xhr);
        });*/

        $.post( urlService, data );
        
    }
});
app.localization.registerView('forumView');

// START_CUSTOM_CODE_forumView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_forumView