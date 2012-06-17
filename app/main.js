require([
  // Global
  "app",

  // Libs
  "jquery",
  "jqueryvalidation",
  "backbone",
  "backbone_super",
  "underscore",
  "handlebars",
  "jquerymobile",
  "modules/view/ExamplePage",
  "modules/view/ExampleDialog",
],

function(app, $, jqValidationUnused, Backbone, bbsuperUnused, _, Handlebars, jqmUnused, ExamplePage, ExampleDialog) {

 $(document).bind("mobileinit", function(){
        $.mobile.ajaxEnabled = false;
        $.mobile.hashListeningEnabled = false;
        $.mobile.pushStateEnabled = false;
        $.mobile.linkBindingEnabled = false;
        $.mobile.defaultPageTransition = "none";
        $.mobile.page.prototype.options.degradeInputs.date = true; // optional
        $.mobile.page.prototype.options.domCache = false; // optional
        $.mobile.defaultDialogTransition = "none"; // optional
});

findAndRegisterPartials = function($scanElement){
	var templateValues = {
		allPages : $scanElement.children('script[type="text/x-handlebars-template"]').map(function() {
			console.debug("Container pages were created: "+ this.id.replace(/template_page_/, "page_"));
			return {
				'templatePartialPageID' : this.id
				//,'pageID' : this.id.replace(/template_page_/, "page_"),
			};
		}).toArray()
	};
	
	$.each(templateValues.allPages, function(index, foundPage) {
		console.debug("page partial was registered: "+ foundPage.templatePartialPageID);
		Handlebars.registerPartial(foundPage.templatePartialPageID, $("#" + foundPage.templatePartialPageID).html());
	});
};
findAndRegisterPartials($("body"));




  // Defining the application router, you can attach sub routers here.
  var Router = Backbone.Router.extend({
    routes: {
      "": "index",
      "openDialog" : "openDialog"
      
    },

    index: function() {
		new ExamplePage();
    },
    openDialog: function(){
		var myModel = Backbone.Model.extend({
			settings : {
				validation : {
					rules : {
						password : {
							"required" : true,
							"digits" : true,
							"min" : 6
						}
					}
				}
			}
		});

		var modelInstance = new myModel();
		
		new ExampleDialog({model : modelInstance});
    }
  });

  // Treat the jQuery ready function as the entry point to the application.
  // Inside this function, kick-off all initialization, everything up to this
  // point should be definitions.
  $(function() {
    // Define your master router on the application namespace and trigger all
    // navigation from this instance.
    app.router = new Router();

    // Trigger the initial route and enable HTML5 History API support
    Backbone.history.start({ pushState: true });
  });

  // All navigation that is relative should be passed through the navigate
  // method, to be processed by the router. If the link has a `data-bypass`
  // attribute, bypass the delegation completely.
  $(document).on("click", "a:not([data-bypass])", function(evt) {
    // Get the anchor href and protcol
    var href = $(this).attr("href");
    var protocol = this.protocol + "//";

    // Ensure the protocol is not part of URL, meaning it's relative.
    if (href && href.slice(0, protocol.length) !== protocol &&
        href.indexOf("javascript:") !== 0) {
      // Stop the default event to ensure the link will not cause a page
      // refresh.
      evt.preventDefault();

      // `Backbone.history.navigate` is sufficient for all Routers and will
      // trigger the correct events. The Router's internal `navigate` method
      // calls this anyways.
      Backbone.history.navigate(href, true);
    }
  });

});
