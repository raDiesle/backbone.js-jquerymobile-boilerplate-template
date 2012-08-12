define([
    "backbone",
    "modules/view/abstract/BasicView"
],

    function(Backbone, BasicView) {
        return BasicView.extend({
            id: "example_page_3",
            getSpecificTemplateValues : function(){
                return {
                    calculation : "another page 3"
                }
            }
        });
    });
