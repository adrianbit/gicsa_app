'use strict';

var selectedPlaza = "";
var emailNewsletter = "";
var currentApp = app;

app.menuView = kendo.observable({
    onShow: function() {},
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
        goToView(selectedPlaza);
    }
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