'use strict';

var selectedPlaza = "";
var emailNewsletter = "";
var currentApp = app;

app.menuView = kendo.observable({
    onShow: function() {
        goToView(getCookie("initial"));
    },
    afterShow: function() {
    }
});
app.localization.registerView('menuView');


// START_CUSTOM_CODE_menuView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

function popUp1(){
    selectedPlaza = $("#selectPopUp1").val();
    if (selectedPlaza!=""){
        $("#popUp1").hide();
        $("#popUp2").show("");
    }
}

function popUp2(){
    emailNewsletter = $("#emailNewsletter").val();
    if (true || emailNewsletter!=""){

        var urlService = "http://167.114.156.36/CustomServices/Subscribers/SubscribersService/SubscribeUserEmail/email="+emailNewsletter;
        $.ajax({
            url: urlService
        }).done(function(xhr) {
            //alert(xhr.SubscribeUserEmailResult);
            goToView(selectedPlaza);
            setCookie("initial",selectedPlaza,30)
        });
    }
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
        c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
        }
    }
    return "";
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function goToView(selectedPlaza){
    if (selectedPlaza=="forumCuernavaca"){
        app.mobileApp.navigate("components/forumView/view.html");
    } else if (selectedPlaza=="islaPuerto"){
        app.mobileApp.navigate("components/laIslaView/view.html");
    } else if (selectedPlaza=="paseoArcos"){
        app.mobileApp.navigate("components/paseoView/view.html");
    } else if (selectedPlaza=="explanadaCancun"){
        app.mobileApp.navigate("components/explanadaView/view.html");
    } else if (selectedPlaza=="plazasOutlet"){
        app.mobileApp.navigate("components/plazasView/view.html");
    }
}

// END_CUSTOM_CODE_menuView