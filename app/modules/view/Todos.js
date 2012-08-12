define([
  "backbone",
  "modules/view/abstract/BasicView"
],

function(Backbone, BasicView) {
  var Todos = BasicView.extend({
  	id: "Todos",
  	getSpecificTemplateValues : function(){
  		return {
  			calculation : "One plus three is " + (1+3)	
  		}
  	}
  });
    return Todos;
});
