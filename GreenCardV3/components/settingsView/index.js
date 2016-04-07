'use strict';

app.settingsView = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});

// START_CUSTOM_CODE_settingsView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes
(function(parent) {
    
    var settingsModel = kendo.observable({
       
        logout: function() {
            //localStorage.removeItem(token);
            localStorage.clear();
            
        	//token = localStorage.getItem("token");
            //navigator.notification.alert(token);
            app.mobileApp.navigate('components/homeView/view.html');
        },
        information: function() {
            
				app.mobileApp.navigate('components/contactsView/view.html');
        },
         earn: function() {
            
				app.mobileApp.navigate('components/earn/view.html');
        }, 
        burnPoint: function() {
           
				app.mobileApp.navigate('components/burnPoint/view.html');
        },
        welcome: function() {
            
				app.mobileApp.navigate('components/welcome/view.html');
        },
    });

    parent.set('settingsModel', settingsModel);
})(app.settingsView);