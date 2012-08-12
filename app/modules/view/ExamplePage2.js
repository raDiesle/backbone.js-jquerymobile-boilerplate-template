define([
    "backbone",
    "modules/view/abstract/BasicView"
],

    function(Backbone, BasicView) {
        return BasicView.extend({
            id: "example_page_2",
            getSpecificTemplateValues : function(){
                return {
                    calculation : "another page"
                }
            }
        });
    });
