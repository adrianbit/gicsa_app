'use strict';

app.forumView = kendo.observable({
    onShow: function() {},
    afterShow: function() {
        $("#selectedPlazaForum").change(function() { goToView($("#selectedPlazaForum").val()); });
    }
});
app.localization.registerView('forumView');

// START_CUSTOM_CODE_forumView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_forumView