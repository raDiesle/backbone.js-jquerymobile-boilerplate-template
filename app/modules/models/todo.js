define([
    'lodash',
    'backbone'
], function (_, Backbone) {

    var TodoModel = Backbone.Model.extend({
        defaults:{
            title:'',
            completed:false
        },
        settings:{
            validation:{
                rules:{
                    password:{
                        "required":true,
                        "digits":true,
                        "min":6
                    }
                }
            }
        },
        toggle:function () {
            this.save({
                completed:!this.get('completed')
            });
        }
    });

    return TodoModel;
});