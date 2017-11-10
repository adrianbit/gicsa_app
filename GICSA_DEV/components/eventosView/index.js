'use strict';

app.eventosView = kendo.observable({
    onShow: function() {},
    afterShow: function() {
        var selectedPlazaCookie = getCookie("initial");
        changeColor(selectedPlazaCookie);
        $("#selectedPlazaEventos").val(selectedPlazaCookie);
        $("#selectedPlazaEventos").change(function() { 
            changeColor($("#selectedPlazaEventos").val());
            loadEventos($("#selectedPlazaEventos").val());  
        });
        loadEventos(selectedPlazaCookie);
    }
});
app.localization.registerView('eventosView');

// START_CUSTOM_CODE_eventosView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

function loadEventos(selectedPlazaCookie){

    var centroId = getIdCentro(selectedPlazaCookie);
    var urlService = "http://167.114.156.36/CustomServices/CentrosComerciales/CentrosService/GetEventosDestacadosByCentro?centroId="+centroId;

    $("#eventosResponse").html(loadingHtml);
    $(".loadingData").show();

    $.ajax({
        url: urlService,
        contentType: "application/json; charset=utf-8",
        dataType: "json", 
    }).done(function(xhr) {

        var eventos = xhr.GetEventosDestacadosByCentroResult;

        for (var x=0;x<eventos.length;x++) {

            var tituloEvento = eventos[x].Nombre;
            var imageEvento = eventos[x].ImagenUrl;
            var detalleEvento = eventos[x].DetalleUrl;
            var inicioEvento = eventos[x].Fecha;

            var htmlEvento = '' +
                '<div class="row" style="padding:20px 10px 0px;">'+
                    '<div class="col-xs-12">'+
                        '<img src="'+imageEvento+'" style="width:100%;background: url(images/placeholder.jpg) 100%;min-height:160px;min-width:100%;"/>'+
                    '</div>'+
                    '<div class="col-xs-12" style="margin-top:20px;text-align:left;padding:0px 30px;">'+
                        '<span>'+tituloEvento+'</span>'+
                        '<br/>'+
                        '<a href="'+detalleEvento+'" target="_blank">Leer más</a>'+
                    '</div>'+
                    '<div class="col-xs-12 tal" style="margin:20px 0px 10px;padding:0px 30px;">'+
                        '<span>'+inicioEvento+'</span>'+
                        '<br/>'+
                        '<hr/>'+
                    '</div>'+
                    '<div class="col-xs-6 tal" style="padding-left:30px;"><img src="images/calendar-icon.png" style="width:30px;cursor:pointer;"/></div>'+
                    '<div class="col-xs-6 tar" style="padding-right:30px;"><img src="images/share-icon.png" style="width:30px;cursor:pointer;"/></div>'+
                    '<div class="col-xs-12"><hr style="border:2px solid #dcdcdc;"/></div>'+
                '</div>';

            $(".loadingData").hide();
            $("#eventosResponse").append(htmlEvento);
        }
    });
}

// END_CUSTOM_CODE_eventosView