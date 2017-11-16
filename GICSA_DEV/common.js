var loadingHtml = ''+
    '<div class="row loadingData" style="padding:20px 10px 0px;" id="loadingData">'+
        '<div class="col-xs-12 tac">'+
            '<img src="images/loading.gif" style="width:50%;margin-top:30px;"/>'+
        '</div>'+
    '</div>';

function share(message, subject, image, link){
    var onSuccess = function(result) {
        console.log("Share completed? " + result.completed); // On Android apps mostly return false even while it's true
        console.log("Shared to app: " + result.app); // On Android result.app is currently empty. On iOS it's empty when sharing is cancelled (result.completed=false)
    }

    var onError = function(msg) {
        console.log("Sharing failed with message: " + msg);
    }

    window.plugins.socialsharing.share(message, subject, image, link, onSuccess, onError);
}

function getIdCentro(selectedPlaza){
    var id = "";
    if (selectedPlaza=="forumCuernavaca"){
        id = "83b439e7-499a-4962-a648-1e91e424f906";
    } else if (selectedPlaza=="islaPuertoVallarta"){
        id = "3ad6d9b5-a771-4d44-8611-9531f19f2664";
    } else if (selectedPlaza=="paseoArcos"){
        id = "51c94670-634d-432e-8c42-e229ae0e3b68";
    } else if (selectedPlaza=="explanadaCancun"){
        id = "39137cf6-8270-400c-9099-16a4caf4ee81";
    } else if (selectedPlaza=="magazine"){
        id = "75164644-3d75-4395-931f-e6c57fa99e99";
    } else if (selectedPlaza=="plazasOutletLerma"){
        id = "4f27ad30-6398-4942-8aa1-79cbe5039570";
    } else if (selectedPlaza=="forumBuenavista"){
        id = "e5169df4-0053-4423-b43e-fa306f5bf89f";
    } else if (selectedPlaza=="paseoInterlomas"){
        id = "4b49cbc1-e2d3-445f-a2cf-178fa051e2c5";
    } else if (selectedPlaza=="islaAcapulco"){
        id = "609adec6-4e31-4545-be82-85d248feef00";
    } else if (selectedPlaza=="forumTlaquepaque"){
        id = "79e2d8ea-cf84-493c-a3f9-cf015f5bdd7b";
    } else if (selectedPlaza=="forumCoatzacoalcos"){
        id = "75164644-3d75-4395-931f-e6c57fa99e99";
    } else if (selectedPlaza=="forumCualiacan"){
        id = "cbe9e5a0-0276-4fcb-b9e8-70b03ce7f8a3";
    } else if (selectedPlaza=="forumTepic"){
        id = "8c7212fb-a233-4cf4-ba2f-7b54fab8c46b";
    } else if (selectedPlaza=="forumCancun"){
        id = "627dc99b-8478-4dc2-ae6e-3d0a593e541f";
    } else if (selectedPlaza=="islaMeridaCaboNorte"){
        id = "75164644-3d75-4395-931f-e6c57fa99e99";
    } else if (selectedPlaza=="islaCancun"){
        id = "75164644-3d75-4395-931f-e6c57fa99e99";
    } else if (selectedPlaza=="plazasOutletCancun"){
        id = "75164644-3d75-4395-931f-e6c57fa99e99";
    } else if (selectedPlaza=="plazasOutletGuadalajara"){
        id = "75164644-3d75-4395-931f-e6c57fa99e99";
    } else if (selectedPlaza=="plazasOutletMonterrey"){
        id = "0b77e05c-a3f8-49ed-a3a6-5c0032848fc1";
    } else if (selectedPlaza=="paseosCoapa"){
        id = "75164644-3d75-4395-931f-e6c57fa99e99";
    } else if (selectedPlaza=="paseosQueretaro"){
        id = "75164644-3d75-4395-931f-e6c57fa99e99";
    } else if (selectedPlaza=="paseosMetepec"){
        id = "75164644-3d75-4395-931f-e6c57fa99e99";
    } else if (selectedPlaza=="paseosXochimilco"){
        id = "75164644-3d75-4395-931f-e6c57fa99e99";
    }
    
    return id;
}

function getColor(selectedPlaza){
    var color = "";
    if (selectedPlaza=="forumCuernavaca"){
        color = "#f6a326";
    } else if (selectedPlaza=="islaPuertoVallarta"){
        color = "#28d0c9)";
    } else if (selectedPlaza=="paseoArcos"){
        color = "#282828";
    } else if (selectedPlaza=="explanadaCancun"){
        color = "#e11282";
    } else if (selectedPlaza=="magazine"){
        color = "#fb9611";
    } else if (selectedPlaza=="plazasOutletLerma"){
        color = "#eb0030";
    } else if (selectedPlaza=="forumBuenavista"){
        color = "#a03123";
    } else if (selectedPlaza=="paseoInterlomas"){
        color = "#1d1d1b";
    } else if (selectedPlaza=="islaAcapulco"){
        color = "#f5bd47";
    } else if (selectedPlaza=="forumTlaquepaque"){
        color = "#e5054c";
    } else if (selectedPlaza=="forumCoatzacoalcos"){
        color = "#009a98";
    } else if (selectedPlaza=="forumCualiacan"){
        color = "#004982";
    } else if (selectedPlaza=="forumTepic"){
        color = "#82bc00";
    } else if (selectedPlaza=="forumCancun"){
        color = "#e30613";
    } else if (selectedPlaza=="islaMeridaCaboNorte"){
        color = "#a2b91c";
    } else if (selectedPlaza=="islaCancun"){
        color = "#e42014";
    } else if (selectedPlaza=="plazasOutletCancun"){
        color = "#eb0028";
    } else if (selectedPlaza=="plazasOutletGuadalajara"){
        color = "#eb0028";
    } else if (selectedPlaza=="plazasOutletMonterrey"){
        color = "#eb0031";
    } else if (selectedPlaza=="paseosCoapa"){
        color = "#1d1d1b";
    } else if (selectedPlaza=="paseosQueretaro"){
        color = "#ffd100";
    } else if (selectedPlaza=="paseosMetepec"){
        color = "#e70095";
    } else if (selectedPlaza=="paseosXochimilco"){
        color = "#e24301";
    }
    return color;
}

function getGradientColor(selectedPlaza){
    var color = "";
    if (selectedPlaza=="forumCuernavaca"){
        color = "linear-gradient(to right, #80bd01 0%, #6b9a08 100%)";
    } else if (selectedPlaza=="islaPuertoVallarta"){
        color = "linear-gradient(to right, #26d0c9 0%, #28d0c9 100%)";
    } else if (selectedPlaza=="paseoArcos"){
        color = "linear-gradient(to right, #000000 0%, #282828 100%)";
    } else if (selectedPlaza=="explanadaCancun"){
        color = "linear-gradient(to right, #e4489c 0%, #e11282 100%)";
    } else if (selectedPlaza=="magazine"){
        color = "linear-gradient(to right, #f6a426 0%, #ff8a00 100%)";
    } else if (selectedPlaza=="plazasOutletLerma"){
        color = "linear-gradient(to right, #eb0030 0%, #eb0030 100%)";
    } else if (selectedPlaza=="forumBuenavista"){
        color = "linear-gradient(to right, #a03123 0%, #a03123 100%)";
    } else if (selectedPlaza=="paseoInterlomas"){
        color = "linear-gradient(to right, #1d1d1b 0%, #1d1d1b 100%)";
    } else if (selectedPlaza=="islaAcapulco"){
        color = "linear-gradient(to right, #f5bd47 0%, #f5bd47 100%)";
    } else if (selectedPlaza=="forumTlaquepaque"){
        color = "linear-gradient(to right, #e5054c 0%, #e5054c 100%)";
    } else if (selectedPlaza=="forumCoatzacoalcos"){
        color = "linear-gradient(to right, #009a98 0%, #009a98 100%)";
    } else if (selectedPlaza=="forumCualiacan"){
        color = "linear-gradient(to right, #004982 0%, #004982# 100%)";
    } else if (selectedPlaza=="forumTepic"){
        color = "linear-gradient(to right, #82bc00 0%, #82bc00 100%)";
    } else if (selectedPlaza=="forumCancun"){
        color = "linear-gradient(to right, #e30613 0%, #e30613 100%)";
    } else if (selectedPlaza=="islaMeridaCaboNorte"){
        color = "linear-gradient(to right, #a2b91c 0%, #a2b91c 100%)";
    } else if (selectedPlaza=="islaCancun"){
        color = "linear-gradient(to right, #e42014 0%, #e42014 100%)";
    } else if (selectedPlaza=="plazasOutletCancun"){
        color = "linear-gradient(to right, #eb0028 0%, #eb0028 100%)";
    } else if (selectedPlaza=="plazasOutletGuadalajara"){
        color = "linear-gradient(to right, #f44e6b 0%, #eb0028 100%)";
    } else if (selectedPlaza=="plazasOutletMonterrey"){
        color = "linear-gradient(to right, #eb0031 0%, #eb0031 100%)";
    } else if (selectedPlaza=="paseosCoapa"){
        color = "linear-gradient(to right, #1d1d1b 0%, #1d1d1b 100%)";
    } else if (selectedPlaza=="paseosQueretaro"){
        color = "linear-gradient(to right, #ffd100 0%, #ffd100 100%)";
    } else if (selectedPlaza=="paseosMetepec"){
        color = "linear-gradient(to right, #e70095 0%, #e70095 100%)";
    } else if (selectedPlaza=="paseosXochimilco"){
        color = "linear-gradient(to right, #e24301 0%, #e24301 100%)";
    }
    return color;
}

function changeColor(selectedPlaza){
    var color = getGradientColor(selectedPlaza);
    $(".insideHeader").css("background-image",color);
    $(".insideGrid").css("background-image",color);
    $(".km-content").css("background-image",color);
}

function mapIframe(selectedPlaza, id){

    var key = "";
    if (selectedPlaza=="forumCuernavaca"){
        key = "Forum%20Cuernavaca+(GICSA)";
    } else if (selectedPlaza=="islaPuertoVallarta"){
        key = "la%20isla%20puerto%20vallarta+(GICSA)";
    } else if (selectedPlaza=="paseoArcos"){
        key = "paseo%20arcos%20bosques+(GICSA)";
    } else if (selectedPlaza=="explanadaCancun"){
        key = "explanada%20cancun+(GICSA)";
    } else if (selectedPlaza=="magazine"){
        key = "gicsa%20magazine+(GICSA)";
    } else if (selectedPlaza=="plazasOutletLerma"){
        key = "plazas%20outlet%20lerma+(GICSA)";
    } else if (selectedPlaza=="forumBuenavista"){
        key = "forum%20buenavista+(GICSA)";
    } else if (selectedPlaza=="paseoInterlomas"){
        key = "paseo%20interlomas+(GICSA)";
    } else if (selectedPlaza=="islaAcapulco"){
        key = "isla%20acapulco+(GICSA)";
    } else if (selectedPlaza=="forumTlaquepaque"){
        key = "forum%20tlaquepaque+(GICSA)";
    } else if (selectedPlaza=="forumCoatzacoalcos"){
        key = "forum%20coatzacoalcos+(GICSA)";
    } else if (selectedPlaza=="forumCualiacan"){
        key = "forum%20culiacan+(GICSA)";
    } else if (selectedPlaza=="forumTepic"){
        key = "forum%20tepic+(GICSA)";
    } else if (selectedPlaza=="forumCancun"){
        key = "forum%20cancun+(GICSA)";
    } else if (selectedPlaza=="islaMeridaCaboNorte"){
        key = "isla%20merica%20cabo%20norte+(GICSA)";
    } else if (selectedPlaza=="islaCancun"){
        key = "isla%20cancun+(GICSA)";
    } else if (selectedPlaza=="plazasOutletCancun"){
        key = "plazas%20outlet%20cancun+(GICSA)";
    } else if (selectedPlaza=="plazasOutletGuadalajara"){
        key = "plazas%20outlet%20guadalajara+(GICSA)";
    } else if (selectedPlaza=="plazasOutletMonterrey"){
        key = "plzas%20outlet%20monterrey+(GICSA)";
    } else if (selectedPlaza=="paseosCoapa"){
        key = "paseos%20coapa+(GICSA)";
    } else if (selectedPlaza=="paseosQueretaro"){
        key = "paseos%20queretaro+(GICSA)";
    } else if (selectedPlaza=="paseosMetepec"){
        key = "paseos%20metepec+(GICSA)";
    } else if (selectedPlaza=="paseosXochimilco"){
        key = "paseos%20xochimilco+(GICSA)";
    }

    //var urlMap = "https://www.mapsdirections.info/crear-un-mapa-de-google/map.php?width=100%&height=600&hl=en&q="+key+"&ie=UTF8&t=&z=14&iwloc=A&output=embed";
    var urlMap = "https://www.google.com/maps/embed/v1/directions?origin=mi+ubicacion&destination="+key+"&key=AIzaSyC0LIfIwD5-WT2s6MshjpFiP5tZXULw7LU";

    $('#'+id).attr('src', (urlMap));
}

function logoPlaza(selectedPlaza, id){

    var key = "";
    if (selectedPlaza=="forumCuernavaca"){
        key = "images/logo-forum.png";
    } else if (selectedPlaza=="islaPuertoVallarta"){
        key = "images/logo-laisla.png";
    } else if (selectedPlaza=="paseoArcos"){
        key = "images/logo-paseo.png";
    } else if (selectedPlaza=="explanadaCancun"){
        key = "images/logo-explanada.png";
    } else if (selectedPlaza=="magazine"){
        key = "images/gicsalogo1.png";
    } else if (selectedPlaza=="plazasOutletLerma"){
        key = "images/logo-outlet-lerma.png";
    } else if (selectedPlaza=="forumBuenavista"){
        key = "images/logo-forum-buenavista.png";
    } else if (selectedPlaza=="paseoInterlomas"){
        key = "images/logo-paseo-interlomas.png";
    } else if (selectedPlaza=="islaAcapulco"){
        key = "images/logo-isla-acapulco.png";
    } else if (selectedPlaza=="forumTlaquepaque"){
        key = "images/logo-forum-tlaquepaque.png";
    } else if (selectedPlaza=="forumCoatzacoalcos"){
        key = "images/logo-forum-coatzacoalcos.png";
    } else if (selectedPlaza=="forumCualiacan"){
        key = "images/logo-forum-culiacan.png";
    } else if (selectedPlaza=="forumTepic"){
        key = "images/logo-forum-tepic.png";
    } else if (selectedPlaza=="forumCancun"){
        key = "images/logo-forum-cancun.png";
    } else if (selectedPlaza=="islaMeridaCaboNorte"){
        key = "images/logo-laisla-merida.png";
    } else if (selectedPlaza=="islaCancun"){
        key = "images/logo-laisla-cancun.png";
    } else if (selectedPlaza=="plazasOutletCancun"){
        key = "images/logo-plazas-outlet-cancun.png";
    } else if (selectedPlaza=="plazasOutletGuadalajara"){
        key = "images/logo-plazas.png";
    } else if (selectedPlaza=="plazasOutletMonterrey"){
        key = "images/logo-plazas-outlet-monterrey.png";
    } else if (selectedPlaza=="paseosCoapa"){
        key = "images/logo-paseos-coapa.png";
    } else if (selectedPlaza=="paseosQueretaro"){
        key = "images/logo-paseos-queretaro.png";
    } else if (selectedPlaza=="paseosMetepec"){
        key = "images/logo-paseos-metepec.png";
    } else if (selectedPlaza=="paseosXochimilco"){
        key = "images/logo-paseos-xochimilco.png";
    }

    $('#'+id).attr('src', key);
}

function inspect(obj) {
	var msg = '';
	for ( var property in obj) {
		if (typeof obj[property] == 'function') {
			var inicio = obj[property].toString().indexOf('function');
			var fin = obj[property].toString().indexOf(')') + 1;
			var propertyValue = obj[property].toString().substring(inicio, fin);
			msg += (typeof obj[property]) + ' ' + property + ' : ' + propertyValue + ' ;\n';
		} else if (typeof obj[property] == 'unknown') {
			msg += 'unknown ' + property + ' : unknown ;\n';
		} else {
			msg += (typeof obj[property]) + ' ' + property + ' : ' + obj[property] + ' ;\n';
		}
	}
	console.log("Inspect : \n" + msg);
	return msg;
}