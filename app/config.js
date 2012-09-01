require.config({
    deps : ["main"],
    //dir: "../app-build",
    paths : {
        // JavaScript folders
        libs : "../assets/js/libs",
        plugins : "../assets/js/plugins",

        //Uncompressed Libraries
        jquery : "../assets/js/libs/jquery", // 1.8.0
        'jquerymobile.config' : 'jquerymobile.config',
        jquerymobile : "../assets/js/libs/jquerymobile", // 1.2.0.Alpha1 with default template
        jqueryvalidation : "../assets/js/libs/jquery.validation",
        lodash : "../assets/js/libs/lodash",
      //  underscore : "../assets/js/libs/underscore",
        backbone : "../assets/js/libs/backbone",
        backbone_super : "../assets/js/libs/backbone_super",
        localstorage : "../assets/js/libs/localstorage",
        handlebars : "../assets/js/libs/handlebars",
        'handlebars.compiled' : "../dist/debug/handlebars_packaged"

    },

    shim : {
        backbone : {
            deps : ["lodash", "jquery"],
            exports : "Backbone"
        },
        backbone_super : {
            deps : ["backbone"],
            exports : "_super"
        },
        handlebars : {
            exports : "Handlebars"
        },
        'handlebars.compiled' : ['handlebars'],
        'jquerymobile.config' : ['jquery'],
        jquerymobile : {
            deps : ["jquery", 'jquerymobile.config']
        },
//        lodash : {
//            deps : ["backbone"],
//            exports : "_"
//        },
        jqueryvalidation : {
            deps : ["jquery"]
        }
    }
});
