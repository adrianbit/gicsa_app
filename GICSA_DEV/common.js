function getIdCentro(selectedPlaza){
    var id = "";
    if (selectedPlaza=="forumCuernavaca"){
        id = "83b439e7-499a-4962-a648-1e91e424f906";
    } else if (selectedPlaza=="islaPuerto"){
        id = "3ad6d9b5-a771-4d44-8611-9531f19f2664";
    } else if (selectedPlaza=="paseoArcos"){
        id = "51c94670-634d-432e-8c42-e229ae0e3b68";
    } else if (selectedPlaza=="explanadaCancun"){
        id = "39137cf6-8270-400c-9099-16a4caf4ee81";
    } else if (selectedPlaza=="plazasOutlet"){
        id = "75164644-3d75-4395-931f-e6c57fa99e99";
    }
    return id;
}

function changeColor(selectedPlaza){
    var color = "";
    if (selectedPlaza=="forumCuernavaca"){
        color = "linear-gradient(to right, #80bd01 0%, #6b9a08 100%)";
    } else if (selectedPlaza=="islaPuerto"){
        color = "linear-gradient(to right, #26d0c9 0%, #28d0c9 100%)";
    } else if (selectedPlaza=="paseoArcos"){
        color = "linear-gradient(to right, #000000 0%, #282828 100%)";
    } else if (selectedPlaza=="explanadaCancun"){
        color = "linear-gradient(to right, #e4489c 0%, #e11282 100%)";
    } else if (selectedPlaza=="plazasOutlet"){
        color = "linear-gradient(to right, #f44e6b 0%, #eb0028 100%)";
    }

    $(".insideHeader").css("background-image",color);
    $(".insideGrid").css("background-image",color);
}

function mapIframe(selectedPlaza, id){

    var key = "";
    if (selectedPlaza=="forumCuernavaca"){
        key = "Forum%20Cuernavaca+(GICSA)";
    } else if (selectedPlaza=="islaPuerto"){
        key = "la%20isla%20puerto%20vallarta+(GICSA)";
    } else if (selectedPlaza=="paseoArcos"){
        key = "paseo%20arcos%20bosques+(GICSA)";
    } else if (selectedPlaza=="explanadaCancun"){
        key = "explanada%20cancun+(GICSA)";
    } else if (selectedPlaza=="plazasOutlet"){
        key = "plazas%20outlet%20guadalajara+(GICSA)";
    }

    var urlMap = "https://www.mapsdirections.info/crear-un-mapa-de-google/map.php?width=100%&height=600&hl=en&q="+key+"&ie=UTF8&t=&z=14&iwloc=A&output=embed";

    $('#'+id).attr('src', (urlMap));
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