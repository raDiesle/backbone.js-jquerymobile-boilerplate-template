define([
  // Global application context.
  "app",

  // Third-party libraries.
  "backbone",
  "modules/view/abstract/Validateable"
],

function(app, Backbone, Validateable) {

  var Basicdialog = Validateable.extend({
	role : "dialog",
	transparentBackgroundPageElID : undefined,
	attributes : function(){
		return {
			"data-role" : this.role,
			"class" :	"dialog_window_option"
		}
	},
	render : function() {
		if(this.transparentBackgroundPageElID){
			this.makeLastPageTransparent();
		}
		this._super("render", {});
	},
	makeLastPageTransparent : function(){
		$transparentBackgroundPageEl = $("#"+this.transparentBackgroundPageElID);
		if($transparentBackgroundPageEl.css("display") !== "none"){
			$transparentBackgroundPageEl.addClass("ui-dialog-background ");
		}
	}
  	
  });
  

  return Basicdialog;
});
