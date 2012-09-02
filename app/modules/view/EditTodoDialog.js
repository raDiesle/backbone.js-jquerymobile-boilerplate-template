define([
    "backbone", "modules/view/abstract/BasicDialog"],
    function (Backbone, BasicDialog) {
        return BasicDialog.extend({
            id : "editTodoDialog",
            headerTitle : "Edit Todo",
            transparentBackgroundPageElID : "Todos",
            getSpecificTemplateValues : function () {
                return this.model.toJSON();
            },
            onSuccessfulValidation : function () {
                var valuer = $("#edit_title", this.el);
                this.model.save({title : valuer.val()});
                window.location = "";
            }
        });
    });
