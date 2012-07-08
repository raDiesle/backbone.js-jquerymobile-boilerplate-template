define([
    // Global application context.
    "app",

    // Third-party libraries.
    "backbone",
    "modules/view/abstract/BasicView"
],

    function(app, Backbone, BasicView) {
        return BasicView.extend({
            id: "example_page_3",
            getSpecificTemplateValues : function(){
                return {
                    calculation : "another page 3"
                }
            }
        });
    });
