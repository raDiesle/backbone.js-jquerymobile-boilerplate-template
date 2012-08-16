define(['handlebars'], function (Handlebars) {

    return function () {
        Handlebars.registerHelper('whatis', function (param) {
            console.log(param);
        });
    }();
});

