Backbone and jquerymobile JQM Boilerplate code
====================

The project is about how to run backbone with jquery mobile and are proven.

This is a ongoing template which is supposed to be used in backbone fundamentals.

##### STATUS
Currently I recommand to use the Basic classes to support backbone + jquery mobile in your project.

* The template project is currently under heavy refactoring
* The mechanism to load templates has to be improved
* findAndRegisterPartials has to be moved
        ...

##### TODO
Add mobile init properties to code!

cleanup require.js dependency management and add view examples.        
        
##### References       
The knownledge about how to run JQM with backbone is partial derived by results of several resources:

http://stackoverflow.com/questions/10904433/jquery-mobile-require-js-and-backbone

http://addyosmani.github.com/backbone-fundamentals/

http://coenraets.org/blog/2012/03/using-backbone-js-with-jquery-mobile/

Thanks for them !

### General

This project is an example by using the backbones default routing with JQM, as adviced by several people.

Alternatively there is also a nice project, which supports a JQM router for backbone. 
https://github.com/azicchetti/jquerymobile-router

With JQM I recommend to have your code as simple as possible by having a view per page 
and do full rendering of handlebars.js or underscore templates.

There are discussions about performance gain, if you only rerender parts in the DOM, which are needed.

I disagree. With handlebars.js to render a page-template takes usually less than 3 ms.
It's only one DOM-access to insert the generated HTML.

With jquery mobile I prefer to have a handlebars.js template per page.
template code can be reused by partials.

So, by convention over configuration, template ids look like:
"template_"+pageID
where the JQM page will be automatically generated and inserted into the DOM.

### jquery mobile init properties

To support right behavior in e.g. navigation and use default backbone.js routing, these are my preferred properties:

```javascript
   $(document).bind("mobileinit", function(){
        $.mobile.ajaxEnabled = false;
        $.mobile.hashListeningEnabled = false;
        $.mobile.pushStateEnabled = false;
        $.mobile.linkBindingEnabled = false;
        $.mobile.defaultPageTransition = "none";
        $.mobile.page.prototype.options.degradeInputs.date = true; // optional
        $.mobile.page.prototype.options.domCache = false; // optional
        $.mobile.defaultDialogTransition = "none"; // optional
      });
  })
```

### Classes to use

#### [`BasicView`](app/modules/BasicView.js)
An example usage for a simple JQM page:
```javascript
ConcreteExampleView = BasicView.extend({
    id: "content",
  	getSpecificTemplateValues : function(){
  		return "something"
  	}
  });
```

getSpecificTemplateValues() is an abstract method. The json values are used for the handlebars.js context variables.

id is the pageID

to e.g. support transparent dialogs, the page will be removed from the DOM when the same page is requested again.


#### [`BasicDialog`](app/modules/BasicDialog.js)
it will render the page as dialog

If you want to support transparent dialogs, like described here
http://tqcblog.com/2012/04/19/transparent-jquery-mobile-dialogs/

you have to define a transparentBackgroundPageElID

In the past, I needed to do always validation in dialogs, because it contains form elements.
That's why it's extending Validateable.

#### [`Validateable`](app/modules/Validateable.js)
Extending Validateable will use the jquery.validate plugin with jquery mobile like described here:
http://www.elijahmanor.com/2011/02/jquery-mobile-form-validation.html

The validate rules are part of the model under this property
this.model.settings.validation.rules


By convention it expects an 

a[type='submit']  and a  form

and validation will be triggered by click on type submit

To use it, you just have to override onSuccessfulValidation


#### Registering handlebars.js templates
To use handlebars.js templates and partials you have to register them first.

The findAndRegisterPartials will do this job for all handlebars.js templates.

It is currently done in [`main.js`](app/main.js)



## Usage of grunt
It uses the grunt Backbone Boilerplate which I really recommand and supports:

GRUNT, basic tasks:
* concat - Concatenate files.
* init - Generate project scaffolding from a predefined template.
* lint - Validate files with JSHint.
* min - Minify files with UglifyJS.
* qunit - Run QUnit unit tests in a headless PhantomJS instance.
* server - Start a static web server.
* test - Run unit tests with nodeunit.
* watch - Run predefined tasks whenever watched files change.

grunt-contrib, tasks:
[`clean`](/gruntjs/grunt-contrib/blob/master/docs/clean.md) - Clear files and folders.

[`coffee`](/gruntjs/grunt-contrib/blob/master/docs/coffee.md) - Compile CoffeeScript files into JavaScript.

[`compress`](/gruntjs/grunt-contrib/blob/master/docs/compress.md) - Compress files and folders using gzip or zip.

[`handlebars`](/gruntjs/grunt-contrib/blob/master/docs/handlebars.md) - Compile handlebars templates to JST file.

[`jade`](/gruntjs/grunt-contrib/blob/master/docs/jade.md) - Compile Jade templates to HTML.

[`jst`](/gruntjs/grunt-contrib/blob/master/docs/jst.md) - Compile underscore templates to JST file.

[`less`](/gruntjs/grunt-contrib/blob/master/docs/less.md) - Compile LESS files to CSS.

[`mincss`](/gruntjs/grunt-contrib/blob/master/docs/mincss.md) - Minify CSS files.

[`requirejs`](/gruntjs/grunt-contrib/blob/master/docs/requirejs.md) - Optimize RequireJS projects using r.js.

[`stylus`](/gruntjs/grunt-contrib/blob/master/docs/stylus.md) - Compile Stylus files into CSS.


## Documentation of backbone boilerplate ##

View the Backbone Boilerplate documentation here:

[GitHub Wiki](https://github.com/tbranyen/backbone-boilerplate/wiki)

## Build process ##

To use the new and improved build process, please visit the 
[grunt-bbb](https://github.com/backbone-boilerplate/grunt-bbb)
plugin repo and follow the instructions to install.  Basing your project off
this repo will allow the `bbb` commands to work out-of-the-box.
