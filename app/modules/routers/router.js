define([
    "modules/view/Todos",
    "modules/view/ExamplePage2",
    "modules/view/ExamplePage3",
    "modules/view/ExampleDialog",

    'lodash',
    'backbone'
], function (TodoView, ExamplePage2, ExamplePage3, ExampleDialog_, Backbone) {

// Defining the application router, you can attach sub routers here.
    var router = Backbone.Router.extend({
        routes:{
            "":"index",
            "openDialog":"openDialog",
            'pages/second':'secondPage',
            'pages/third':'thirdPage'
        },

        index:function () {
            // new TodoView();
        }
//        ,
//        openDialog:function () {
//            console.debug("dialog was requested");
//
//            var myModel = Backbone.Model.extend({
//
//            });
//
//            var modelInstance = new myModel();
//
//            new ExampleDialog({model:modelInstance});
//        },
//        secondPage:function () {
//            console.debug("second page openened");
//            new ExamplePage2();
//        },
//        thirdPage:function () {
//            new ExamplePage3();
//        }
    });

    return router;

});