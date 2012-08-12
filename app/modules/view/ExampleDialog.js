define([
"backbone", "modules/view/abstract/BasicDialog"],
    function(Backbone, BasicDialog) {
	
	return BasicDialog.extend({
		id : "example_dialog",
		transparentBackgroundPageElID : "example_page",
		getSpecificTemplateValues : function() {
			return {
				currenttime : new Date()
			}
		},
		onSuccessfulValidation : function(){
			alert("Valid");
		}
	});
});
