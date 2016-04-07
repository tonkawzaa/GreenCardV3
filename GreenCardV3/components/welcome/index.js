'use strict';

app.welcome = kendo.observable({
    
    onShow: function(e) {
        
        var header_token = null;
            
        var token = null;
        	token = localStorage.getItem("token");
            header_token =  "Bearer "+token;
            //navigator.notification.alert(header_token);
            $.ajax({
                        type: "POST",
                        url: "https://greenapi.odooportal.com/api/v1/points",
                        contentType: "application/json",
                		headers: {'Authorization' : header_token},
                        success: function(result) {
                            
                            //navigator.notification.alert(result.data);   
                     
                        },
                        error: function() {
                            
                            navigator.notification.alert("กรุณาลงชื่อเข้าใช้ใหม่");
                            app.mobileApp.navigate('components/signin/view.html');
                            
                        }
                });
        
               
        
    },
    afterShow: function() {}
});
(function(parent) {
    
    var welcomeModel = kendo.observable({
       
        logout: function() {
            //localStorage.removeItem(token);
            localStorage.clear();
            
        	//token = localStorage.getItem("token");
            //navigator.notification.alert(token);
            app.mobileApp.navigate('components/homeView/view.html');
        },
        information: function() {
            
				app.mobileApp.navigate('components/information/view.html');
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

    parent.set('welcomeModel', welcomeModel);
})(app.welcome);

// START_CUSTOM_CODE_welcome
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_welcome