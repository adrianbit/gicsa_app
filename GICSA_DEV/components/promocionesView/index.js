'use strict';

app.promocionesView = kendo.observable({
    onShow: function() {},
    afterShow: function() {

        var selectedPlazaCookie = getCookie("initial");
        changeColor(selectedPlazaCookie);
        $("#selectedPlazaPromociones").val(selectedPlazaCookie);
        $("#selectedPlazaPromociones").change(function() { 
            changeColor($("#selectedPlazaPromociones").val());
            loadPromociones($("#selectedPlazaPromociones").val()); 
        });
        loadPromociones(selectedPlazaCookie);
    }
});
app.localization.registerView('promocionesView');


// START_CUSTOM_CODE_promocionesView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

function loadPromociones(selectedPlazaCookie){

    var centroId = getIdCentro(selectedPlazaCookie);
    var urlService = "http://167.114.156.36/CustomServices/CentrosComerciales/CentrosService/GetPromocionesDestacadasByCentro?centroId="+centroId;

    $.ajax({
        url: urlService,
        contentType: "application/json; charset=utf-8",
        dataType: "json", 
    }).done(function(xhr) {

        $("#promocionesResponse").html("");

        var promociones = xhr.GetPromocionesDestacadasByCentroResult;

        for (var x=0;x<promociones.length;x++) {

            var tituloPromocion = promociones[x].Titulo;
            var imagePromocion = promociones[x].ImagenUrl;
            var detallePromocion = promociones[x].DetalleUrl;
            var inicioPromocion = promociones[x].VigenciaInicio;
            var finPromocion = promociones[x].VigenciaFin;

            var htmlPromocion = '' +
                '<div class="row" style="padding:20px 10px 0px;">'+
                    '<div class="col-xs-12">'+
                        '<img src="'+imagePromocion+'" style="width:100%;"/>'+
                    '</div>'+
                    '<div class="col-xs-12" style="margin-top:20px;text-align:left;padding:0px 30px;">'+
                        '<span>'+tituloPromocion+'</span>'+
                        '<br/>'+
                        '<a href="'+detallePromocion+'" target="_blank">Leer más</a>'+
                    '</div>'+
                    '<div class="col-xs-12 tal" style="margin:20px 0px 10px;padding:0px 30px;">'+
                        '<span>Del '+inicioPromocion+' al '+finPromocion+'</span>'+
                        '<br/>'+
                        '<a href="#">Terminos y condiciones</a>'+
                        '<hr/>'+
                    '</div>'+
                    '<div class="col-xs-6 tal" style="padding-left:30px;"><img src="images/dummy-icon.png" style="width:30px;"/></div>'+
                    '<div class="col-xs-6 tar" style="padding-right:30px;"><img src="images/dummy-icon.png" style="width:30px;"/></div>'+
                    '<div class="col-xs-12"><hr style="border:5px solid #dcdcdc;"/></div>'+
                '</div>';

            $("#promocionesResponse").append(htmlPromocion);
        }
    });
}

// END_CUSTOM_CODE_promocionesView