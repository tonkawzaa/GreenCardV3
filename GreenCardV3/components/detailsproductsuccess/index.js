'use strict';
//////   development /////////
 //var server_location="https://greenapi.odooportal.com";
 
 //////   production /////////
 var server_location="https://greencardapi.deqp.go.th";

app.detailsproductsuccess = kendo.observable({
    onShow: function() {
         var header_token = null;
            
           	var token = null;
        	token = localStorage.getItem("token");
            header_token =  "Bearer "+token;
            //navigator.notification.alert(header_token);
            $.ajax({
                        type: "POST",
                        url: server_location+"/api/v1/points",
                        contentType: "application/json",
                		headers: {'Authorization' : header_token},
                        success: function(result) {                
                            //navigator.notification.alert(result.data);
                            kendo.bind($("#headerdetailsproductsuccess"),result);  
                        },
                        error: function(result) {
                            //navigator.notification.alert(result);    
                            navigator.notification.alert("กรุณาลงชื่อเข้าใช้ใหม่");
                            app.mobileApp.navigate('components/homeView/view.html');
                        }
                });
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
    afterShow: function() {},
});

(function(parent) {
    

    var detailsproductsuccessModel = kendo.observable({
       
        
       
    });

    parent.set('detailsproductsuccessModel', detailsproductsuccessModel);
})(app.earn);