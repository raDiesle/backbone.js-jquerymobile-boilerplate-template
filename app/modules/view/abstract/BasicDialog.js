define([
    "backbone",
    "modules/view/abstract/Validateable"
],

    function (Backbone, Validateable) {

        var Basicdialog = Validateable.extend({
            role:"dialog",
            transparentBackgroundPageElID:undefined,
            attributes:function () {
                return {
                    "data-role":this.role
                }
            },
            render:function () {
                if (this.transparentBackgroundPageElID) {
                    this.makeLastPageTransparent();
                }
                this._super("render", {});
            },
            makeLastPageTransparent:function () {
                $transparentBackgroundPageEl = $("#" + this.transparentBackgroundPageElID);
                if ($transparentBackgroundPageEl.css("display") !== "none") {
                    $transparentBackgroundPageEl.addClass("ui-dialog-background ");
                }
            }

        });


        return Basicdialog;
    });
