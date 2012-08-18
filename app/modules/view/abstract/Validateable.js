define([
    "backbone",
    "modules/view/abstract/BasicView"
],

    function (Backbone, BasicView) {

        var Validateable = BasicView.extend({
            onSuccessfulValidation : undefined,
            events : {
                "click a[type='submit']" : "validateForm"
            },
            render : function () {
                this._super("render", {});
                this.addValidationHandler();
            },
            addValidationHandler : function () {
                assert(this.onSuccessfulValidation !== undefined, 'this.onSuccessfulValidation is null');
                $("form", this.el).validate({
                    rules : this.model.settings.validation.rules,
                    submitHandler : $.proxy(this.onSuccessfulValidation, this),
                    debug : true
                });
            },
            validateForm : function (event) {
                event.preventDefault();
                $("form", this.el).submit();
            }
        });

        /*
         Assert. move to global util file
         */
        function AssertException(message) {
            this.message = message;
        }

        AssertException.prototype.toString = function () {
            return 'AssertException: ' + this.message;
        };

        function assert(exp, message) {
            if (!exp) {
                throw new AssertException(message);
            }
        }

        return Validateable;
    });


