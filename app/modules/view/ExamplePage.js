define([
  // Global application context.
  "app",

  // Third-party libraries.
  "backbone",
  "modules/view/abstract/BasicView"
],

function(app, Backbone, BasicView) {
  return BasicView.extend({
  	id: "example_page",
  	getSpecificTemplateValues : function(){
  		return {
  			calculation : "One plus three is " + (1+3)	
  		}
  	}
  });
});
