require([
    "jquery",
    "jqueryvalidation",
    "backbone",
    "backbone_super",
    "lodash",
    "handlebars",
    "initialize.config",
    "handlebars.compiled",
    "jquerymobile",
    "modules/view/TodosView",
    "modules/TodosCollection",
    "common",
    "modules/view/ExamplePage2",
    "modules/view/ExamplePage3",
    "modules/view/EditTodoDialog"
],
//    jqValidationUnused
    function ($, jqueryUnused, Backbone, bbsuperUnused, _, Handlebars, initializeSettings, handlebarscompUnused, jqmUnused, TodosView, TodosCollection, Common, ExamplePage2, ExamplePage3, ExampleDialog) {
        initializeSettings.init();

        var Router = Backbone.Router.extend({
            routes : {
                "" : "index",
                "todo" : "index",
                "todo/:filter" : "filter",
                "editTodoTitle/:id" : "openDialog",
                'pages/second' : 'secondPage',
                'pages/third' : 'thirdPage',
                '*path' : 'index'
            },

            index : function () {
                new TodosView();
            },
            filter : function (filter) {
                Common.TodoFilter = filter.trim() === 'all' ? '' : filter.trim() || '';
                TodosCollection.trigger('filter');
            },
            openDialog : function (todoCID) {
                new ExampleDialog({model : TodosCollection.getByCid(todoCID)});
            },
            secondPage : function () {
                new ExamplePage2();
            },
            thirdPage : function () {
                new ExamplePage3();
            }
        });

        $(function () {
            new Router();
            Backbone.history.start({ pushState : false });
        });
    });
