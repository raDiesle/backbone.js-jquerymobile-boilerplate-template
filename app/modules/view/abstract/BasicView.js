define([
    "underscore",
    "backbone",
    "handlebars",
    "handlebars_helpers"
    // add handlebars compiled instead of window.jst
],

    function (_, Backbone, Handlebars) {
        var BasicView = Backbone.View.extend({
            initialize : function () {
                _.bindAll();
                this.render();
            },
            role : "page",
            attributes : function () {
                return {
                    "data-role" : this.role
                };
            },
            getHeaderTitle : function () {
                return this.getSpecificTemplateValues().headerTitle;
            },
            getTemplateID : function () {
                return "template_basic_page_simple";
            },
            getTemplateResult : function (templateDefinitionID, templateValues) {
                return window.JST[templateDefinitionID](templateValues);
            },
            getBasicPageTemplateResult : function () {
                var templateValues = {templatePartialPageID : "template_" + this.id, headerTitle : this.getHeaderTitle()};
                var specific = this.getSpecificTemplateValues();

                $.extend(templateValues, this.getSpecificTemplateValues());
                return this.getTemplateResult(this.getTemplateID(), templateValues);
            },
            getRequestedPageTemplateResult : function () {
                this.getBasicPageTemplateResult();
            },
            render : function () {
                this.cleanupPossiblePageDuplicationInDOM();

                $(this.el).html(this.getBasicPageTemplateResult());

                this.addPageToDOMAndRenderJQM();

                $.mobile.changePage("#" + this.id, {
                    reverse : false,
                    changeHash : false,
                    role : this.role
                });
            },
            addPageToDOMAndRenderJQM : function () {
                $("body").append($(this.el));
                $("#" + this.id).page();
            },
            // Instead you could use event "pagehide": "onPageHide"
            cleanupPossiblePageDuplicationInDOM : function () {
                var $previousEl = $("#" + this.id);
                var alreadyInDom = $previousEl.length >= 0;
                if (alreadyInDom) {
                    $previousEl.remove();
                }
            }
        });

        return BasicView;
    });
