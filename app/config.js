// Set the require.js configuration for your application.
require.config({
  // Initialize the application with the main application file
  deps: ["main"],

  paths: {
    // JavaScript folders
    libs: "../assets/js/libs",
    plugins: "../assets/js/plugins",

    // Libraries
    jquery: "../assets/js/libs/jquery",
    jquerymobile: "../assets/js/libs/jquerymobile",
    jqueryvalidation: "../assets/js/libs/jquery.validation",
    lodash: "../assets/js/libs/lodash",
    underscore: "../assets/js/libs/underscore",
    backbone: "../assets/js/libs/backbone",
    backbone_super: "../assets/js/libs/backbone_super", 
    handlebars: "../assets/js/libs/handlebars"
  },

  shim: {
    backbone: {
      deps: ["lodash", "jquery"],
      exports: "Backbone"
    },
    backbone_super: {
      deps: ["backbone"],
      exports: "_super"
    },
     handlebars: {
      deps: ["jquery"],
      exports: "Handlebars"
    },
    jquerymobile: {
      deps: ["jquery"],
      exports: "jquerymobile"
    },
    underscore: {
      deps: ["backbone"],
      exports: "_"
    },
    jqueryvalidation: {
    	deps: ["jquery"],
    	exports: "jqueryvalidation"
    }
    
  }
});
