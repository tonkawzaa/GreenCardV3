'use strict';
//////   development /////////
//var server_location="https://greenapi.odooportal.com";
//var categoryname1= "Green 1";

//////   production /////////
var server_location="https://greencardapi.deqp.go.th";
var categoryname1= "อาหารและเครื่องดื่ม";


app.earnbyid = kendo.observable({
    
    /*
    dataearnbyid1: new kendo.data.DataSource({
                type: "data",
            transport: {
                read: function(options) {
                        $.ajax({
                            type: "POST",
                            url: server_location+"/api/v1/products_by_category",
                            contentType: "application/json; charset=utf-8",
                             data: JSON.stringify({ category_name: categoryname1 }),
                            dataType: "json",
                            success: function (result) {
                                //navigator.notification.alert(result.data);
                                if(result.data.error_code == "ProdsByCatError01")
                                {
                                    navigator.notification.alert("ไม่พบชนิดของสินค้า");
                                    app.mobileApp.navigate('components/earn/view.html');
                                }else{
                                    options.success(result.data);
                                }
                                 
                               },
                                   
                                
                             
                        error: function(result) {
                            //navigator.notification.alert(result);
                            navigator.notification.alert("ระบบผิดพลาด");
                                                },
                          });
                    },
            },
    }),
    dataearnbyid2: new kendo.data.DataSource({
                type: "data",
            transport: {
                read: function(options) {
                        $.ajax({
                            type: "POST",
                            url: server_location+"/api/v1/products_by_category",
                            contentType: "application/json; charset=utf-8",
                             data: JSON.stringify({ category_name: "บริการสุขภาพ" }),
                            dataType: "json",
                                success: function (result) {
                                //navigator.notification.alert(result.data);
                                if(result.data.error_code == "ProdsByCatError01")
                                {
                                    navigator.notification.alert("ไม่พบชนิดของสินค้า");
                                    app.mobileApp.navigate('components/earn/view.html');
                                }else{
                                    options.success(result.data);
                                }
                                 
                               },
                                   
                                
                             
                        error: function(result) {
                            //navigator.notification.alert(result);
                            navigator.notification.alert("ระบบผิดพลาด");
                                                },
                          });
                    },
            },
    }),
    dataearnbyid3: new kendo.data.DataSource({
                type: "data",
            transport: {
                read: function(options) {
                        $.ajax({
                            type: "POST",
                            url: server_location+"/api/v1/products_by_category",
                            contentType: "application/json; charset=utf-8",
                             data: JSON.stringify({ category_name: "เครื่องนุ่งห่ม" }),
                            dataType: "json",
                                success: function (result) {
                                //navigator.notification.alert(result.data);
                                if(result.data.error_code == "ProdsByCatError01")
                                {
                                    navigator.notification.alert("ไม่พบชนิดของสินค้า");
                                    app.mobileApp.navigate('components/earn/view.html');
                                }else{
                                    options.success(result.data);
                                }
                                 
                               },
                                   
                                
                             
                        error: function(result) {
                            //navigator.notification.alert(result);
                            navigator.notification.alert("ระบบผิดพลาด");
                                                },
                          });
                    },
            },
    }),
    dataearnbyid4: new kendo.data.DataSource({
                type: "data",
            transport: {
                read: function(options) {
                        $.ajax({
                            type: "POST",
                            url: server_location+"/api/v1/products_by_category",
                            contentType: "application/json; charset=utf-8",
                             data: JSON.stringify({ category_name: "อิเล็กทรอนิกส์" }),
                            dataType: "json",
                                success: function (result) {
                                //navigator.notification.alert(result.data);
                                if(result.data.error_code == "ProdsByCatError01")
                                {
                                    navigator.notification.alert("ไม่พบชนิดของสินค้า");
                                    app.mobileApp.navigate('components/earn/view.html');
                                }else{
                                    options.success(result.data);
                                }
                                 
                               },
                                   
                                
                             
                        error: function(result) {
                            //navigator.notification.alert(result);
                            navigator.notification.alert("ระบบผิดพลาด");
                                                },
                          });
                    },
            },
    }),
    dataearnbyid5: new kendo.data.DataSource({
                type: "data",
            transport: {
                read: function(options) {
                        $.ajax({
                            type: "POST",
                            url: server_location+"/api/v1/products_by_category",
                            contentType: "application/json; charset=utf-8",
                             data: JSON.stringify({ category_name: "เครื่องใช้ไฟฟ้าและแสงสว่าง" }),
                            dataType: "json",
                                success: function (result) {
                                //navigator.notification.alert(result.data);
                                if(result.data.error_code == "ProdsByCatError01")
                                {
                                    navigator.notification.alert("ไม่พบชนิดของสินค้า");
                                    app.mobileApp.navigate('components/earn/view.html');
                                }else{
                                    options.success(result.data);
                                }
                                 
                               },
                                   
                                
                             
                        error: function(result) {
                            //navigator.notification.alert(result);
                            navigator.notification.alert("ระบบผิดพลาด");
                                                },
                          });
                    },
            },
    }),
    dataearnbyid6: new kendo.data.DataSource({
                type: "data",
            transport: {
                read: function(options) {
                        $.ajax({
                            type: "POST",
                            url: server_location+"/api/v1/products_by_category",
                            contentType: "application/json; charset=utf-8",
                             data: JSON.stringify({ category_name: "เครื่องใช้สำนักงาน" }),
                            dataType: "json",
                                success: function (result) {
                                //navigator.notification.alert(result.data);
                                if(result.data.error_code == "ProdsByCatError01")
                                {
                                    navigator.notification.alert("ไม่พบชนิดของสินค้า");
                                    app.mobileApp.navigate('components/earn/view.html');
                                }else{
                                    options.success(result.data);
                                }
                                 
                               },
                                   
                                
                             
                        error: function(result) {
                            //navigator.notification.alert(result);
                            navigator.notification.alert("ระบบผิดพลาด");
                                                },
                          });
                    },
            },
    }),
    dataearnbyid7: new kendo.data.DataSource({
                type: "data",
            transport: {
                read: function(options) {
                        $.ajax({
                            type: "POST",
                            url: server_location+"/api/v1/products_by_category",
                            contentType: "application/json; charset=utf-8",
                             data: JSON.stringify({ category_name: "เครื่องใช้ในบ้านเรือน" }),
                            dataType: "json",
                                success: function (result) {
                                //navigator.notification.alert(result.data);
                                if(result.data.error_code == "ProdsByCatError01")
                                {
                                    navigator.notification.alert("ไม่พบชนิดของสินค้า");
                                    app.mobileApp.navigate('components/earn/view.html');
                                }else{
                                    options.success(result.data);
                                }
                                 
                               },
                                   
                                
                             
                        error: function(result) {
                            //navigator.notification.alert(result);
                            navigator.notification.alert("ระบบผิดพลาด");
                                                },
                          });
                    },
            },
    }),
    dataearnbyid8: new kendo.data.DataSource({
                type: "data",
            transport: {
                read: function(options) {
                        $.ajax({
                            type: "POST",
                            url: server_location+"/api/v1/products_by_category",
                            contentType: "application/json; charset=utf-8",
                             data: JSON.stringify({ category_name: "วัสดุก่อสร้าง" }),
                            dataType: "json",
                                success: function (result) {
                                //navigator.notification.alert(result.data);
                                if(result.data.error_code == "ProdsByCatError01")
                                {
                                    navigator.notification.alert("ไม่พบชนิดของสินค้า");
                                    app.mobileApp.navigate('components/earn/view.html');
                                }else{
                                    options.success(result.data);
                                }
                                 
                               },
                                   
                                
                             
                        error: function(result) {
                            //navigator.notification.alert(result);
                            navigator.notification.alert("ระบบผิดพลาด");
                                                },
                          });
                    },
            },
    }),
    dataearnbyid9: new kendo.data.DataSource({
                type: "data",
            transport: {
                read: function(options) {
                        $.ajax({
                            type: "POST",
                            url: server_location+"/api/v1/products_by_category",
                            contentType: "application/json; charset=utf-8",
                             data: JSON.stringify({ category_name: "โรงแรม" }),
                            dataType: "json",
                                success: function (result) {
                                //navigator.notification.alert(result.data);
                                if(result.data.error_code == "ProdsByCatError01")
                                {
                                    navigator.notification.alert("ไม่พบชนิดของสินค้า");
                                    app.mobileApp.navigate('components/earn/view.html');
                                }else{
                                    options.success(result.data);
                                }
                                 
                               },
                                   
                                
                             
                        error: function(result) {
                            //navigator.notification.alert(result);
                            navigator.notification.alert("ระบบผิดพลาด");
                                                },
                          });
                    },
            },
    }),
    dataearnbyid10: new kendo.data.DataSource({
                type: "data",
            transport: {
                read: function(options) {
                        $.ajax({
                            type: "POST",
                            url: server_location+"/api/v1/products_by_category",
                            contentType: "application/json; charset=utf-8",
                             data: JSON.stringify({ category_name: "การเดินทาง" }),
                            dataType: "json",
                                success: function (result) {
                                //navigator.notification.alert(result.data);
                                if(result.data.error_code == "ProdsByCatError01")
                                {
                                    navigator.notification.alert("ไม่พบชนิดของสินค้า");
                                    app.mobileApp.navigate('components/earn/view.html');
                                }else{
                                    options.success(result.data);
                                }
                                 
                               },
                                   
                                
                             
                        error: function(result) {
                            //navigator.notification.alert(result);
                            navigator.notification.alert("ระบบผิดพลาด");
                                                },
                          });
                    },
            },
    }),
    
    dataearnbyid11: new kendo.data.DataSource({
                type: "data",
            transport: {
                read: function(options) {
                        $.ajax({
                            type: "POST",
                            url: server_location+"/api/v1/products_by_category",
                            contentType: "application/json; charset=utf-8",
                             data: JSON.stringify({ category_name: "สถานที่ท่องเที่ยว" }),
                            dataType: "json",
                                success: function (result) {
                                //navigator.notification.alert(result.data);
                                if(result.data.error_code == "ProdsByCatError01")
                                {
                                    navigator.notification.alert("ไม่พบชนิดของสินค้า");
                                    app.mobileApp.navigate('components/earn/view.html');
                                }else{
                                    options.success(result.data);
                                }
                                 
                               },
                                   
                                
                             
                        error: function(result) {
                            //navigator.notification.alert(result);
                            navigator.notification.alert("ระบบผิดพลาด");
                                                },
                          });
                    },
            },
    }),
    dataearnbyid12: new kendo.data.DataSource({
                type: "data",
            transport: {
                read: function(options) {
                        $.ajax({
                            type: "POST",
                            url: server_location+"/api/v1/products_by_category",
                            contentType: "application/json; charset=utf-8",
                             data: JSON.stringify({ category_name: "สถานีบริการ" }),
                            dataType: "json",
                                success: function (result) {
                                //navigator.notification.alert(result.data);
                                if(result.data.error_code == "ProdsByCatError01")
                                {
                                    navigator.notification.alert("ไม่พบชนิดของสินค้า");
                                    app.mobileApp.navigate('components/earn/view.html');
                                }else{
                                    options.success(result.data);
                                }
                                 
                               },
                                   
                                
                             
                        error: function(result) {
                            //navigator.notification.alert(result);
                            navigator.notification.alert("ระบบผิดพลาด");
                                                },
                          });
                    },
            },
    }),
    
    */
    onShow: function(e) {
        var viewparams = e.view.params; 
        var Scategoryname = viewparams.Scategoryname;
        var txtSearchid = viewparams.txtSearchid;
        
        //navigator.notification.alert(Scategoryname);
        // navigator.notification.alert(txtSearchid);
    
        
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
                            kendo.bind($("#headerearnbyid"),result);  
                            kendo.bind($("#headerearnbyid1"),result);
                            kendo.bind($("#headerearnbyid2"),result);
                            kendo.bind($("#headerearnbyid3"),result);
                            kendo.bind($("#headerearnbyid4"),result);
                            kendo.bind($("#headerearnbyid5"),result);
                            kendo.bind($("#headerearnbyid6"),result);
                            kendo.bind($("#headerearnbyid7"),result);
                            kendo.bind($("#headerearnbyid8"),result);
                            kendo.bind($("#headerearnbyid9"),result);
                            kendo.bind($("#headerearnbyid10"),result);
                            kendo.bind($("#headerearnbyid11"),result);
                            kendo.bind($("#headerearnbyid12"),result);  
                            kendo.bind($("#headerearnbyid1_2"),result);
                            kendo.bind($("#headerearnbyid2_2"),result);
                            kendo.bind($("#headerearnbyid3_2"),result);
                            kendo.bind($("#headerearnbyid4_2"),result);
                            kendo.bind($("#headerearnbyid5_2"),result);
                            kendo.bind($("#headerearnbyid6_2"),result);
                            kendo.bind($("#headerearnbyid7_2"),result);
                            kendo.bind($("#headerearnbyid8_2"),result);
                            kendo.bind($("#headerearnbyid9_2"),result);
                            kendo.bind($("#headerearnbyid10_2"),result);
                            kendo.bind($("#headerearnbyid11_2"),result);
                            kendo.bind($("#headerearnbyid12_2"),result);
                        },
                        error: function(result) {
                            navigator.notification.alert(result);    
                        }
                });
        
        if(Scategoryname)
        {
            if (txtSearchid ==''){
                navigator.notification.alert("กรุณากรอกข้อความค้นหา");
            }else
            {
                // navigator.notification.alert(earnbyidModel.fields.txtSearchid1);
                $.ajax({
                        type: "POST",
                        url: server_location+"/api/v1/search_products_in_category",
                        contentType: "application/json",
                        data: JSON.stringify({ search_string: txtSearchid,
                                               category_name: Scategoryname,
                                             }),
                        success: function(result) {
                            //navigator.notification.alert(result);
                            if(result.data=='')
                            {
                                navigator.notification.alert("ไม่พบสินค้า");
                            }else{
                                /*
                                if(Scategoryname=="อาหารและเครื่องดื่ม"){
                                    e.view.element.find("#searchearnbyid1").kendoMobileListView({
            			            template: kendo.template($("#earnlisttmp").html()),
            			            dataSource: result.data,
                                    });
                                }else if(Scategoryname=="บริการสุขภาพ"){
                                    e.view.element.find("#searchearnbyid2").kendoMobileListView({
            			            template: kendo.template($("#earnlisttmp").html()),
            			            dataSource: result.data,
                                    });
                                }
                                */
                                
                                e.view.element.find("#searchearnbyid1").kendoMobileListView({
            			            template: kendo.template($("#earnlisttmp").html()),
            			            dataSource: result.data,
                                    });
                            }
                             

                        },
                        error: function(result) {
                            navigator.notification.alert(result);
                            //navigator.notification.alert("เชื่อมต่อผิดพลาด");
                            
                        }
                       
                  });
            }
            
        }
          
             
        
      
    },
    afterShow: function() {},
    
});

(function(parent) {
    

    var earnbyidModel = kendo.observable({
        
        information: function() {
				app.mobileApp.navigate('components/information/view.html');
        },
         earn: function() {
				app.mobileApp.navigate('components/earn/view.html');
        }, 
        burnPoint: function() {
				app.mobileApp.navigate('components/burnPoint/view.html');
        },
         clickedImage1 : function()
            {
                app.mobileApp.navigate('components/earnbyid/earnby1.html');
            },
        clickedImage2 : function()
            {
                app.mobileApp.navigate('components/earnbyid/earnby2.html');
            },
        clickedImage3 : function()
            {
                app.mobileApp.navigate('components/earnbyid/earnby3.html');
            },
        clickedImage4 : function()
            {
                app.mobileApp.navigate('components/earnbyid/earnby4.html');
            },
        clickedImage5 : function()
            {
                app.mobileApp.navigate('components/earnbyid/earnby5.html');
            },
        clickedImage6 : function()
            {
                app.mobileApp.navigate('components/earnbyid/earnby6.html');
            },
        clickedImage7 : function()
            {
                app.mobileApp.navigate('components/earnbyid/earnby7.html');
            },
        clickedImage8 : function()
            {
                app.mobileApp.navigate('components/earnbyid/earnby8.html');
            },
        clickedImage9 : function()
            {
                app.mobileApp.navigate('components/earnbyid/earnby9.html');
            },
        clickedImage10 : function()
            {
                app.mobileApp.navigate('components/earnbyid/earnby10.html');
            },
        clickedImage11 : function()
            {
                app.mobileApp.navigate('components/earnbyid/earnby11.html');
            },
        clickedImage12 : function()
            {
                app.mobileApp.navigate('components/earnbyid/earnby12.html');
            },
        
        fields: {            
            txtSearchid1: '',
        },
        searchid1:function()
        {
            var Scategoryname ='อาหารและเครื่องดื่ม';
            var passparameter = 'components/earnbyid/earnby1_2.html?txtSearchid='+earnbyidModel.fields.txtSearchid1+'&Scategoryname='+Scategoryname;
           // navigator.notification.alert(earnbyidModel.fields.txtSearchid1);
            app.mobileApp.navigate(passparameter);
            //app.mobileApp.navigate('components/earnbyid/earnby1.html?txtSearchid=0&Scategoryname=อาหารและเครื่องดื่ม');
        },
        searchid1_2:function()
        {
            var Scategoryname ='อาหารและเครื่องดื่ม';
            var passparameter = 'components/earnbyid/earnby1.html?txtSearchid='+earnbyidModel.fields.txtSearchid1+'&Scategoryname='+Scategoryname;
            app.mobileApp.navigate(passparameter);
        },
        searchid2:function()
        {
            var Scategoryname ='บริการสุขภาพ';
            var passparameter = 'components/earnbyid/earnby2_2.html?txtSearchid='+earnbyidModel.fields.txtSearchid1+'&Scategoryname='+Scategoryname;
            app.mobileApp.navigate(passparameter);
        },
        searchid2_2:function()
        {
            var Scategoryname ='บริการสุขภาพ';
            var passparameter = 'components/earnbyid/earnby2.html?txtSearchid='+earnbyidModel.fields.txtSearchid1+'&Scategoryname='+Scategoryname;
            app.mobileApp.navigate(passparameter);
        },
        searchid3:function()
        {
            var Scategoryname ='เครื่องนุ่งห่ม';
            var passparameter = 'components/earnbyid/earnby3_2.html?txtSearchid='+earnbyidModel.fields.txtSearchid1+'&Scategoryname='+Scategoryname;
            app.mobileApp.navigate(passparameter);
        },
        searchid3_2:function()
        {
            var Scategoryname ='เครื่องนุ่งห่ม';
            var passparameter = 'components/earnbyid/earnby3.html?txtSearchid='+earnbyidModel.fields.txtSearchid1+'&Scategoryname='+Scategoryname;
            app.mobileApp.navigate(passparameter);
        },
        searchid4:function()
        {
            var Scategoryname ='อิเล็กทรอนิกส์';
            var passparameter = 'components/earnbyid/earnby4_2.html?txtSearchid='+earnbyidModel.fields.txtSearchid1+'&Scategoryname='+Scategoryname;
            app.mobileApp.navigate(passparameter);
        },
        searchid4_2:function()
        {
            var Scategoryname ='อิเล็กทรอนิกส์';
            var passparameter = 'components/earnbyid/earnby4.html?txtSearchid='+earnbyidModel.fields.txtSearchid1+'&Scategoryname='+Scategoryname;
            app.mobileApp.navigate(passparameter);
        },
        searchid5:function()
        {
            var Scategoryname ='เครื่องใช้ไฟฟ้าและแสงสว่าง';
            var passparameter = 'components/earnbyid/earnby5_2.html?txtSearchid='+earnbyidModel.fields.txtSearchid1+'&Scategoryname='+Scategoryname;
            app.mobileApp.navigate(passparameter);
        },
        searchid5_2:function()
        {
            var Scategoryname ='เครื่องใช้ไฟฟ้าและแสงสว่าง';
            var passparameter = 'components/earnbyid/earnby5.html?txtSearchid='+earnbyidModel.fields.txtSearchid1+'&Scategoryname='+Scategoryname;
            app.mobileApp.navigate(passparameter);
        },
        searchid6:function()
        {
            var Scategoryname ='เครื่องใช้สำนักงาน';
            var passparameter = 'components/earnbyid/earnby6_2.html?txtSearchid='+earnbyidModel.fields.txtSearchid1+'&Scategoryname='+Scategoryname;
            app.mobileApp.navigate(passparameter);
        },
        searchid6_2:function()
        {
            var Scategoryname ='เครื่องใช้สำนักงาน';
            var passparameter = 'components/earnbyid/earnby6.html?txtSearchid='+earnbyidModel.fields.txtSearchid1+'&Scategoryname='+Scategoryname;
            app.mobileApp.navigate(passparameter);
        },
        searchid7:function()
        {
            var Scategoryname ='เครื่องใช้ในบ้านเรือน';
            var passparameter = 'components/earnbyid/earnby7_2.html?txtSearchid='+earnbyidModel.fields.txtSearchid1+'&Scategoryname='+Scategoryname;
            app.mobileApp.navigate(passparameter);
        },
        searchid7_2:function()
        {
            var Scategoryname ='เครื่องใช้ในบ้านเรือน';
            var passparameter = 'components/earnbyid/earnby7.html?txtSearchid='+earnbyidModel.fields.txtSearchid1+'&Scategoryname='+Scategoryname;
            app.mobileApp.navigate(passparameter);
        },
        searchid8:function()
        {
            var Scategoryname ='วัสดุก่อสร้าง';
            var passparameter = 'components/earnbyid/earnby8_2.html?txtSearchid='+earnbyidModel.fields.txtSearchid1+'&Scategoryname='+Scategoryname;
            app.mobileApp.navigate(passparameter);
        },
        searchid8_2:function()
        {
            var Scategoryname ='วัสดุก่อสร้าง';
            var passparameter = 'components/earnbyid/earnby8.html?txtSearchid='+earnbyidModel.fields.txtSearchid1+'&Scategoryname='+Scategoryname;
            app.mobileApp.navigate(passparameter);
        },
        searchid9:function()
        {
            var Scategoryname ='โรงแรม';
            var passparameter = 'components/earnbyid/earnby9_2.html?txtSearchid='+earnbyidModel.fields.txtSearchid1+'&Scategoryname='+Scategoryname;
            app.mobileApp.navigate(passparameter);
        },
        searchid9_2:function()
        {
            var Scategoryname ='โรงแรม';
            var passparameter = 'components/earnbyid/earnby9.html?txtSearchid='+earnbyidModel.fields.txtSearchid1+'&Scategoryname='+Scategoryname;
            app.mobileApp.navigate(passparameter);
        },
        searchid10:function()
        {
            var Scategoryname ='การเดินทาง';
            var passparameter = 'components/earnbyid/earnby10_2.html?txtSearchid='+earnbyidModel.fields.txtSearchid1+'&Scategoryname='+Scategoryname;
            app.mobileApp.navigate(passparameter);
        },
        searchid10_2:function()
        {
            var Scategoryname ='การเดินทาง';
            var passparameter = 'components/earnbyid/earnby10.html?txtSearchid='+earnbyidModel.fields.txtSearchid1+'&Scategoryname='+Scategoryname;
            app.mobileApp.navigate(passparameter);
        },
        searchid11:function()
        {
            var Scategoryname ='สถานที่ท่องเที่ยว';
            var passparameter = 'components/earnbyid/earnby11_2.html?txtSearchid='+earnbyidModel.fields.txtSearchid1+'&Scategoryname='+Scategoryname;
            app.mobileApp.navigate(passparameter);
        },
        searchid11_2:function()
        {
            var Scategoryname ='สถานที่ท่องเที่ยว';
            var passparameter = 'components/earnbyid/earnby11.html?txtSearchid='+earnbyidModel.fields.txtSearchid1+'&Scategoryname='+Scategoryname;
            app.mobileApp.navigate(passparameter);
        },
        searchid12:function()
        {
            var Scategoryname ='สถานีบริการ';
            var passparameter = 'components/earnbyid/earnby12_2.html?txtSearchid='+earnbyidModel.fields.txtSearchid1+'&Scategoryname='+Scategoryname;
            app.mobileApp.navigate(passparameter);
        },
        searchid12_2:function()
        {
            var Scategoryname ='สถานีบริการ';
            var passparameter = 'components/earnbyid/earnby12.html?txtSearchid='+earnbyidModel.fields.txtSearchid1+'&Scategoryname='+Scategoryname;
            app.mobileApp.navigate(passparameter);
        },
       
    });

    parent.set('earnbyidModel', earnbyidModel);
})(app.earnbyid);