Backbone and jquerymobile JQM Boilerplate code
===============================================

This project provides a bulletproof template + build process to develop
an application by using jQuery mobile and backbone.js
The aim is to provide it in Addy Osmanis [Backbone Fundamentals](https://github.com/addyosmani/backbone-fundamentals)

It consists of:
- [Backbone.js](http://backbonejs.org/) 0.9.2
- extended [super](https://gist.github.com/2423599) call (supports multiple hierarchies of inerheritance)
- [Lodash](http://lodash.com/) ( performance improved version of underscore + AMD support) 0.5
- [jQuery Toolkit](http://jquery.com/) 1.8.0
- [jQuery Mobile](http://jquerymobile.com/) 1.1.1
- [Require.js](http://requirejs.org/) (as an AMD loader) 2.0.5
- [Handlebars.js](http://handlebarsjs.com/) ( instead, underscore js or any other template engine can be used) 1.0.beta.6
- [Grunt.js](https://github.com/cowboy/grunt) as build tool, like ant or maven, to precompile handlebars.js templates, and r.js optimizer tasks
- [Grunt bbb](https://github.com/backbone-boilerplate/grunt-bbb) a collection of tasks, containing [grunt-contrib](https://github.com/gruntjs/grunt-contrib) task collection

- code structure and super-classes for clean code and easy reuse

### Table of contents
* [General](#general)
* [Basic classes](#basicclasses) : [Basic View](#basicclasses_basicview) [Basic Dialog] (#basicclasses_basicdialog) [Validateable](#basisclasses_validateable)
* [Handlebars](#handlebars)
* [Grunt](#grunt)
* [Grunt-contrib](#grunt_contrib)
* [Settings](#settings)
* [Todo](#todo)
* [References](#references)


#### Quick start


* checkout from git with your favourite tool or cmd. For those who are new, I would recommand usage of Eclipse Git, Webstorm or Tortoise Git
* open your command line tool
* cd to the project folder "backbone.js-jquerymobile-boilerplate-template"
* download and install [node.js](http://nodejs.org/) for your os system and run in your project folder:
* npm install -g grunt            ( installs grunt command line tool)
* npm install -g bbb              ( is a grunt addon, which offers backbone templates and task collections like grunt-contrib)
* npm install grunt-contrib       ( needed to install not global, because you'll need the newest version)

* bbb handlebars                  ( precompiles templates to javascript functions)
* bbb server                      ( runs server on your local machine in development mode)
* go to http://localhost:8000
* Before you start developing, enable the handlebars task, if any change is done on a file by running once:
  bbb watch or run bbb handlebars every time manually


###<a name="general">General</a>

With JQM I recommend to have your code as simple as possible by having a view per page 
and do full rendering of handlebars.js or underscore templates.

There are discussions about performance gain, if you only rerender parts in the DOM, which are needed.

I disagree. With handlebars.js to render a page-template takes usually less than 3 ms.
It's only one DOM-access to insert the generated HTML.

With jquery mobile it's a good idea to have one template per page/view.
template code can be reused by partials.

So, by convention over configuration, template ids look like:
"template_"+pageID
where the JQM page will be automatically generated and inserted into the DOM.



###<a name="basicclasses">Prepared classes for simple usage</a>

#### <a name="basicclasses_basicview">[`BasicView`](app/modules/BasicView.js)</a>

##### Use case:
For any kind of new jquery mobile page

##### How to use:

* getSpecificTemplateValues() is an abstract method. The json values are used for the handlebars.js context variables.
* id is the pageID
* to e.g. support transparent dialogs, the page will be removed from the DOM when the same page is requested again.

##### Examples:

An example usage for a simple JQM page:
```javascript
ConcreteExampleView = BasicView.extend({
    id: "content",
      getSpecificTemplateValues : function(){
  		return "something"
  	}
  });
```


#### <a name="basicclasses_basicdialog">[`BasicDialog`](app/modules/BasicDialog.js)</a>

##### Use case:
It will render the page as dialog with or without validation

##### How to use

*If you want to support transparent dialogs, like described here
http://tqcblog.com/2012/04/19/transparent-jquery-mobile-dialogs/
you have to define a transparentBackgroundPageElID



##### Examples

#### <a name="basicclasses_validateable">[`Validateable`](app/modules/Validateable.js)</a>
Extending Validateable will use the jquery.validate plugin with jquery mobile like described here:
http://www.elijahmanor.com/2011/02/jquery-mobile-form-validation.html

##### Use case
The validate rules are part of the model under this property
this.model.settings.validation.rules

##### How to use
By convention it expects an 

a[type='submit']  and a  form

and validation will be triggered by click on type submit

To use it, you just have to override onSuccessfulValidation

##### Examples


#### <a name="handlebars">Registering handlebars.js templates</a>
To use handlebars.js templates and partials you have to register them first.

The findAndRegisterPartials will do this job for all handlebars.js templates.

It is currently done in [`main.js`](app/main.js)



### <a name="grunt">Usage of grunt</a>
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

### <a name="grunt_contrib">Grunt-Contrib</a>

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



### <a name="settings">Additional Settings</a>

To support right behavior in e.g. navigation and use default backbone.js routing, use the following properties:

```javascript
   $(document).bind("mobileinit", function(){
        $.mobile.ajaxEnabled = false;
        $.mobile.hashListeningEnabled = false;
        $.mobile.pushStateEnabled = false;
        $.mobile.linkBindingEnabled = false;
        $.mobile.defaultPageTransition = "none";
        $.mobile.page.prototype.options.degradeInputs.date = true; // optional
        $.mobile.page.prototype.options.domCache = false; // optional
        $.mobile.defaultDialogTransition = "none"; // optional depends on performance
      });
  })
```

If you want to enable transitions per device ( where you expect good performance) you can use logic per device like described here http://backbonefu.com/2012/01/jquery-mobile-and-backbone-js-the-ugly/:

```javascript
var iosDevice = ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPod/i))) ? true : false;
 
  $.extend(  $.mobile , {
    slideText :  (iosDevice) ? "slide" : "none",
    slideUpText :  (iosDevice) ? "slideup" : "none",
    defaultPageTransition:(iosDevice) ? "slide" : "none",
    defaultDialogTransition:(iosDevice) ? "slide" : "none"
  });
```


Backbone.history.start({ pushState: false });
is used to work properly with forward/back buttons


### <a name="todo">TODO</a>

* Make an Addy Osmani TodoMVC application out of it.
* Implement good back button functionality e.g. for dialog
* add subview support with jQuery Mobile and backbone
* Extend documentation
* Write a chapter in Addy Osmani Backbone fundamentals about this project
* Introduce handlebars task like described here : https://github.com/cowboy/grunt/issues/225
* Cleanup require.js dependency management and add view examples. 
* Add tests ( jasmine + sinon.js + + phantom.js ? + continous integration  with jstestdriver and jenkins)
* Make a mobile + desktop app out of it, using common coed


##### <a name="references">References and similar projects</a>

- https://github.com/Filirom1/jquery-mobile-backbone-requirejs

uses the jQuery Mobile Router plugin ( extends/manipulates  the existing backbone.js routing)

- https://github.com/ccoenraets/backbone-jquerymobile uses no AMD


The knownledge about how to run JQM with backbone is partial derived by results of several resources:

http://stackoverflow.com/questions/10904433/jquery-mobile-require-js-and-backbone

http://addyosmani.github.com/backbone-fundamentals/

http://coenraets.org/blog/2012/03/using-backbone-js-with-jquery-mobile/

https://github.com/azicchetti/jquerymobile-router

https://github.com/buildmobile/backbone.js/tree/master/js

Thanks for them !


