'use strict';

app.novedadesView = kendo.observable({
    onShow: function() {},
    afterShow: function() {
        var selectedPlazaCookie = getCookie("initial");
        changeColor(selectedPlazaCookie);
        $("#selectedPlazaNovedades").val(selectedPlazaCookie);
        $("#selectedPlazaNovedades").change(function() { 
            changeColor($("#selectedPlazaNovedades").val()); 
            loadNovedades($("#selectedPlazaNovedades").val()); 
        });
        loadNovedades(selectedPlazaCookie);
    }
});
app.localization.registerView('novedadesView');

// START_CUSTOM_CODE_novedadesView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

function loadNovedades(selectedPlazaCookie){

    var centroId = getIdCentro(selectedPlazaCookie);
    var urlService = "http://167.114.156.36/CustomServices/CentrosComerciales/CentrosService/GetNoticiasDestacadosByCentro?centroId="+centroId;

    $("#novedadesResponse").html(loadingHtml);
    $(".loadingData").show();

    $.ajax({
        url: urlService,
        contentType: "application/json; charset=utf-8",
        dataType: "json", 
    }).done(function(xhr) {

        var novedades = xhr.GetNoticiasDestacadosByCentroResult;

        for (var x=0;x<novedades.length;x++) {

            var tituloNovedad = novedades[x].Titulo;
            var imageNovedad = novedades[x].ImagenUrl;
            var detalleNovedad = novedades[x].DetalleUrl;
            var inicioNovedad = novedades[x].Subtitulo;

            var htmlNovedad = '' +
                '<div class="row" style="padding:20px 10px 0px;">'+
                    '<div class="col-xs-12">'+
                        '<img src="'+imageNovedad+'" style="width:100%;background: url(images/placeholder.jpg) 100%;min-height:160px;min-width:100%;"/>'+
                    '</div>'+
                    '<div class="col-xs-12" style="margin-top:20px;text-align:left;padding:0px 30px;">'+
                        '<span>'+tituloNovedad+'</span>'+
                        '<br/>'+
                        '<a href="'+detalleNovedad+'" target="_blank">Leer más</a>'+
                    '</div>'+
                    '<div class="col-xs-12 tal" style="margin:20px 0px 10px;padding:0px 30px;">'+
                        '<span>'+inicioNovedad+'</span>'+
                        '<br/>'+
                        '<hr/>'+
                    '</div>'+
                    '<div class="col-xs-12 tar" style="padding-right:30px;"><img src="images/share-icon.png" style="width:30px;"/></div>'+
                    '<div class="col-xs-12"><hr style="border:2px solid #dcdcdc;"/></div>'+
                '</div>';

            $(".loadingData").hide();
            $("#novedadesResponse").append(htmlNovedad);
        }
    });
}

// END_CUSTOM_CODE_novedadesView