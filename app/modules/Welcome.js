define([
  // Global application context.
  "app",

  // Third-party libraries.
  "backbone",
  "modules/BasicView"
],

function(app, Backbone, BasicView) {
  var Welcome = app.module();

  Concreteexampleview = BasicView.extend({
  	id: "content",
  	getSpecificTemplateValues : function(){
  		return "something"
  	}
  });

  return Welcome;
});
