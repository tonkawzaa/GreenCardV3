'use strict';
//////   development /////////
var server_location="https://greenapi.odooportal.com";

//////   production /////////
//var server_location="https://greencardapi.deqp.go.th";

app.information = kendo.observable({
    
    onShow: function(e) {
        
      
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
                            kendo.unbind($("#headerinformation"));
                               kendo.bind($("#headerinformation"),result);
                        },
                        error: function(result) {
                          //  navigator.notification.alert(result);    
                            navigator.notification.alert("กรุณาลงชื่อเข้าใช้ใหม่");
                            app.mobileApp.navigate('components/homeView/view.html');
                        }
                });
                $.ajax({
                            type: "POST",
                            url: server_location+"/api/v1/cert_types",
                            contentType: "application/json; charset=utf-8",
                            success: function(result) {
                            
                            //navigator.notification.alert(result.data); 
                            e.view.element.find("#certtype").kendoMobileListView({
        			            template: kendo.template($("#certtypestmp").html()),
        			            dataSource: result.data,
                     });
                        },
                        error: function(result) {
                            navigator.notification.alert(result.error_message);    
                        }
                 });
        
       
        
    },
    afterShow: function() {}
    

});

(function(parent) {

    var informationModel = kendo.observable({
       
        information: function() {
            //navigator.notification.alert("information");
				app.mobileApp.navigate('components/information/view.html');
            
        },
         earn: function() {   
             //navigator.notification.alert("earn");
				app.mobileApp.navigate('components/earn/view.html');
        }, 
        burnPoint: function() {
            //navigator.notification.alert("burnPoint");
				app.mobileApp.navigate('components/burnPoint/view.html');
        },
       
    });

    parent.set('informationModel', informationModel);
})(app.information);
