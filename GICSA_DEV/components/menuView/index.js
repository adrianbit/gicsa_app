'use strict';

var selectedPlaza = "";
var emailNewsletter = "";

app.menuView = kendo.observable({
    onShow: function() {},
    afterShow: function() {
        
    }
});
app.localization.registerView('menuView');

function popUp1(){
    selectedPlaza = $("#selectPopUp1").val();
    if (selectedPlaza!=""){
        $("#popUp1").hide();
        $("#popUp2").show("");
    }
}

function popUp2(){
    emailNewsletter = $("#emailNewsletter").val();
    if (emailNewsletter!=""){
        $("#popUp2").hide();
        $("#headerNavbar").show("");
        goToView(selectedPlaza);
    }
}

function goToView(selectedPlaza){
    var app = new kendo.mobile.Application();
    if (selectedPlaza=="forumCuernavaca"){
        app.navigate("components/forumView/view.html");
    } else if (selectedPlaza=="islaPuerto"){
        app.navigate("components/laIslaView/view.html");
    } else if (selectedPlaza=="paseoArcos"){
        app.navigate("components/paseoView/view.html");
    } else if (selectedPlaza=="explanadaCancun"){
        app.navigate("components/explanadaView/view.html");
    } else if (selectedPlaza=="plazasOutlet"){
        app.navigate("components/plazasView/view.html");
    }
}

// START_CUSTOM_CODE_menuView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_menuView