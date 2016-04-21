'use strict';
//////   development /////////
var server_location="https://greenapi.odooportal.com";

//////   production /////////
//var server_location="https://greencardapi.deqp.go.th";

app.burnPoint = kendo.observable({
    
    
    eventgiftsdata: new kendo.data.DataSource({
            transport: {
                read: function(options) {
                        $.ajax({
                            type: "GET",
                            url: server_location+"/api/v1/event_gifts",
                            contentType: "application/json; charset=utf-8",
                            dataType: "json",
                            success: function (result) {
                                //navigator.notification.alert(result);
                                options.success(result.data);
                                
                            },
                            error: function(result) {
                            //navigator.notification.alert(result);   
                               navigator.notification.alert("ขออภัยไม่มี promotion ตอนนี้"); 
                            },
                        });
                    }
            },
       // serverPaging: true,
        // pageSize: 4,
    }),
    
    
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
                            
                            //result.set("data","55555" );
                            
                            kendo.unbind($("#headerburnPoint"));
                            kendo.bind($("#headerburnPoint"),result);
                        },
                        error: function(result) {
                            
                            
                            navigator.notification.alert("กรุณาลงชื่อเข้าใช้ใหม่");
                            app.mobileApp.navigate('components/homeView/view.html');
                            
                        
                        },
                });
                
            $.ajax({
                            type: "POST",
                            url: server_location+"/api/v1/gifts",
                            contentType: "application/json; charset=utf-8",
                            dataType: "json",
                            success: function (result) {
                               // navigator.notification.alert(result.data);
                                e.view.element.find("#giftslist").kendoMobileListView({
        			            template: kendo.template($("#giftslisttmp").html()),
        			            dataSource: result.data,
                                    });
                                
                             },
                            error: function(result) {
                            //navigator.notification.alert(result);   
                               navigator.notification.alert("เชื่อมต่อข้อมูล gifts ผิดพลาด"); 
                            },
                  });
        
        
      
    },
    afterShow: function() {}
});

(function(parent) {
    

    var burnPointModel = kendo.observable({
       
        information: function() {
				app.mobileApp.navigate('components/information/view.html');
        },
         earn: function() {
				app.mobileApp.navigate('components/earn/view.html');
        }, 
        burnPoint: function() {
				app.mobileApp.navigate('components/burnPoint/view.html');
        },
        
        clickedImage : function()
        {
            navigator.notification.alert("clickedImage");
             //app.mobileApp.navigate('components/earnbyid/earnby1.html');
        },
  
       
    });

    parent.set('burnPointModel', burnPointModel);
})(app.burnPoint);
