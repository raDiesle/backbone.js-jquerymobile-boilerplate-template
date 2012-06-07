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
    lodash: "../assets/js/libs/lodash",
    underscore: "../assets/js/libs/underscore",
    backbone: "../assets/js/libs/backbone",
    handlebars: "../assets/js/libs/handlebars"
  },

  shim: {
    backbone: {
      deps: ["lodash", "jquery"],
      exports: "Backbone"
    },
     handlebars: {
      deps: ["lodash", "jquery"],
      exports: "Handlebars"
    },
    jquerymobile: {
      deps: ["lodash", "jquery"],
      exports: "jquerymobile"
    },
    underscore: {
      deps: ["lodash", "backbone"],
      exports: "_"
    }
  }
});
