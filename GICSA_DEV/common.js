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