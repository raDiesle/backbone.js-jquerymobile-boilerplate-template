define([
    "backbone",
    "jquery",
    "lodash",
    "modules/view/abstract/BasicView",
    "modules/TodosCollection",
    "modules/view/SingleTodoView",
    "common"
],
    function (Backbone, $, _, BasicView, Todos, SingleTodoView, Common) {
        var TodosView = BasicView.extend({
            id : "Todos",
            //collection : new TodosCollection(
            /*        {title : "wash dishes", isCompleted : true, id : 0},
             {title : "Do homework", isCompleted : false, id : 1}
             ]*/
            //),
            initialize : function () {
                this._super("render", {});

                Todos.on('add', this.addOne, this);
                Todos.on('reset', this.addAll, this);
                Todos.on('change:completed', this.filterOne, this);
                Todos.on("filter", this.filterAll, this);
                Todos.on('all', this.render, this);

                Todos.fetch();


            },
            getSpecificTemplateValues : function () {
                return {
                    'completed' : Todos.completed().length,
                    'remaining' : Todos.remaining().length
                    //todos : this.collection.toJSON()
                };
            },
            render : function () {


                this.input = this.$('#new-todo');
                this.allCheckbox = this.$('#toggle-all')[0];
                this.$footer = this.$('#footer');
                this.$main = this.$('#main');



              //  if (Todos.length) {
                    this.$main.show();
                    this.$footer.show();



                    this.$('#filters li a')
                        .removeClass('selected')
                        .filter('[href="#/' + ( Common.TodoFilter || '' ) + '"]')
                        .addClass('selected');
               /* } else {
                    this.$main.hide();
                    this.$footer.hide();
                }*/

                //this.allCheckbox.checked = !remaining;

            },
            events : {
                'keypress #new-todo' : 'createOnEnter',
                'click #clear-completed' : 'clearCompleted',
                'click #toggle-all' : 'toggleAllComplete'
                // "change select" : "toggleCompleted"
            },
            // Add a single todo item to the list by creating a view for it, and
            // appending its element to the `<ul>`.
            addOne : function (todo) {
                var view = new SingleTodoView({ model : todo });
                $('#todo-list').append(view.render().el).trigger("create");
            },

            // Add all items in the **Todos** collection at once.
            addAll : function () {
                this.$('#todo-list').html('');
                Todos.each(this.addOne, this);

            },

            filterOne : function (todo) {
                todo.trigger("visible");
            },

            filterAll : function () {
                app.Todos.each(this.filterOne, this);
            },

            // Generate the attributes for a new Todo item.
            newAttributes : function () {
                return {
                    title : this.input.val().trim(),
                    order : Todos.nextOrder(),
                    completed : false
                };
            },

            // If you hit return in the main input field, create new **Todo** model,
            // persisting it to *localStorage*.
            createOnEnter : function (e) {
                if (e.which !== Common.ENTER_KEY || !this.input.val().trim()) {
                    return;
                }

                Todos.create(this.newAttributes());
                this.input.val('');
            },

            // Clear all completed todo items, destroying their models.
            clearCompleted : function () {
                _.each(Todos.completed(), function (todo) {
                    todo.destroy();
                });

                return false;
            },

            toggleAllComplete : function () {
                var completed = this.allCheckbox.checked;

                Todos.each(function (todo) {
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
