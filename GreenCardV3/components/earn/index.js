'use strict';

app.earn = kendo.observable({
    
    scan: function() {
            cordova.plugins.barcodeScanner.scan(
                function(result) {
                    //navigator.notification.alert(result.text);
                   
                    var navi_parameters = "components/detailsproducts/view.html?id="+result.text;
                    app.mobileApp.navigate(navi_parameters);
                 
                   
                }, 
                function(error) {
                    	navigator.notification.alert(error);
                });
        },
    earnbyid: function() {
        
                //navigator.notification.alert("earnbyid");
                app.mobileApp.navigate("components/earnbyid/view.html");
        },
    
    onShow: function() {
        
        
            var header_token = null;
            
           	var token = null;
        	token = localStorage.getItem("token");
            header_token =  "Bearer "+token;
            //navigator.notification.alert(header_token);
            $.ajax({
                        type: "POST",
                        url: "https://greencardapi.deqp.go.th/api/v1/points",
                        contentType: "application/json",
                		headers: {'Authorization' : header_token},
                        success: function(result) {                
                            //navigator.notification.alert(result.data);
                            kendo.bind($("#headerearnGreen"),result);  
                        },
                        error: function(result) {
                            //navigator.notification.alert(result);    
                            navigator.notification.alert("กรุณาลงชื่อเข้าใช้ใหม่");
                            app.mobileApp.navigate('components/homeView/view.html');
                        }
                });
      
    },
    afterShow: function() {}
});

(function(parent) {
    

    var earnModel = kendo.observable({
       
        information: function() {
				app.mobileApp.navigate('components/information/view.html');
        },
         earn: function() {
				app.mobileApp.navigate('components/earn/view.html');
        }, 
        burnPoint: function() {
				app.mobileApp.navigate('components/burnPoint/view.html');
        },
       
    });

    parent.set('earnModel', earnModel);
})(app.earn);
