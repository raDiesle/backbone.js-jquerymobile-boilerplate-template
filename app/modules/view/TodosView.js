define([
    "backbone",
    "jquery",
    "lodash",
    "modules/view/abstract/BasicView",
    "modules/TodosCollection",
    "modules/view/SingleTodoView",
    "common"
],
    function (Backbone, $, _, BasicView, TodosCollection, SingleTodoView, Common) {
        var TodosView = BasicView.extend({
            id : "Todos",

            initialize : function () {
                TodosCollection.on('add', this.addOne, this);

                TodosCollection.on('reset', this.addAllTodos, this);
                TodosCollection.on('change:completed', this.filterOne, this);
                TodosCollection.on("filter", this.filterAll, this);
                TodosCollection.on('all', this.render, this);
                TodosCollection.fetch();
            },
            getSpecificTemplateValues : function () {
                return {
                    'completed' : TodosCollection.completed().length,
                    'remaining' : TodosCollection.remaining().length,
                    'isAnyOrOneRemaining' : TodosCollection.remaining().length > 1,
                    'isAnyCompleted' : TodosCollection.completed().length > 0
                    //TodosCollection : this.collection.toJSON()
                };
            },
            render : function () {
                this.input = this.$('#new-todo');
                this.allCheckbox = this.$('#toggle-all')[0];
                this.$footer = this.$('#footer');
                this.$main = this.$('#main');


                var completed = TodosCollection.completed().length;
                var remaining = TodosCollection.remaining().length;

                if (TodosCollection.length) {
                    this.$main.show();
                    this.$footer.show();



                    this.$('#filters li a')
                        .removeClass('selected')
                        .filter('[href="#/' + ( Common.TodoFilter || '' ) + '"]')
                        .addClass('selected');
                } else {
                    this.$main.hide();
                    this.$footer.hide();
                }

                this.allCheckbox.checked = !remaining;

            },

            // Add a single todo item to the list by creating a view for it, and
            // appending its element to the `<ul>`.

            // Add all items in the **TodosCollection** collection at once.

            // Generate the attributes for a new Todo item.
            //),
            events : {
                'keypress #new-todo' : 'createOnEnter',
                'click #clear-completed' : 'clearCompleted',
                'click #toggle-all' : 'toggleAllComplete'
                // "change select" : "toggleCompleted"
            },
            addOne : function (todo) {
                var view = new SingleTodoView({ model : todo });
                $('#todo-list').append(view.render().el).trigger("create");
            },
            addAllTodos : function () {
                this._super("render", {});
                this.$('#todo-list').html('');
                TodosCollection.each(this.addOne, this);

            },

            filterOne : function (todo) {
                todo.trigger("visible");
            },

            filterAll : function () {
                //app.TodosCollection.each(this.filterOne, this);
                TodosCollection.each(this.filterOne, this);
            },
            newAttributes : function () {
                return {
                    title : this.input.val().trim(),
                    order : TodosCollection.nextOrder(),
                    completed : false
                };
            },

            // If you hit return in the main input field, create new **Todo** model,
            // persisting it to *localStorage*.
            createOnEnter : function (e) {
                if (e.which !== Common.ENTER_KEY || !this.input.val().trim()) {
                    return;
                }

                TodosCollection.create(this.newAttributes());
                this.input.val('');
            },

            // Clear all completed todo items, destroying their models.
            clearCompleted : function () {
                _.each(TodosCollection.completed(), function (todo) {
                    todo.destroy();
                });

                return false;
            },

            toggleAllComplete : function () {
                var completed = this.allCheckbox.checked;

                TodosCollection.each(function (todo) {
                    todo.save({
                        'completed' : completed
                    });
                });
            }
//            toggleCompleted : function (event) {
//                console.log("toggeled"); // 'span[name="todo_description"]',
//
//                var $singleTodo = $(event.currentTarget.parentElement);
//                var singleTodoId = $singleTodo.attr("id").split("_")[1];
//                console.log(this.collection.get(singleTodoId).get("isCompleted"));
//                $singleTodo.attr("class", "completed");
//
//            }
        });

        return TodosView;
    })
;
