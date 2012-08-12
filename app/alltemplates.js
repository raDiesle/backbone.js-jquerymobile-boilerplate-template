this['JST'] = this['JST'] || {};

this['JST']['template_basic_page_simple'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers; partials = partials || Handlebars.partials;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression, helperMissing=helpers.helperMissing, self=this;


  buffer += "    <div data-role=\"header\">\r\n        <h2>";
  foundHelper = helpers.headerTitle;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.headerTitle; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "</h2>\r\n        <a href=\"#\" data-icon=\"delete\">Close</a>\r\n    </div>\r\n    <div data-role=\"content\">\r\n        ";
  foundHelper = helpers.whatis;
  stack1 = foundHelper ? foundHelper.call(depth0, depth0, {hash:{}}) : helperMissing.call(depth0, "whatis", depth0, {hash:{}});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n        ";
  stack1 = depth0;
  stack1 = self.invokePartial(partials.templatePartialPageID, 'templatePartialPageID', stack1, helpers, partials);;
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\r\n    </div>\r\n    <div data-role=\"footer\">\r\n        Footer\r\n    </div>\r\n";
  return buffer;});

this['JST']['readme'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "To easily identify templates by id, all templates have the prefix 'template_'\r\nBy convention a backbone view will take 'template_' + the id of the view as default template";});

this['JST']['template_example_dialog'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "    ";
  foundHelper = helpers.currenttime;
  if (foundHelper) { stack1 = foundHelper.call(depth0, {hash:{}}); }
  else { stack1 = depth0.currenttime; stack1 = typeof stack1 === functionType ? stack1() : stack1; }
  buffer += escapeExpression(stack1) + "\r\n    <p>Please enter your Name:</p>\r\n    <form>\r\n        <input type=\"text\" name=\"password\" value=\"Wrong value (ZRHjhbf§&SD32)\"/>\r\n        <a data-role=\"button\" type=\"submit\">Check input</a>\r\n    </form>\r\n";
  return buffer;});

this['JST']['template_example_page_2'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "    <p>Welcome to my second page.</p>\r\n    go to third page <a href=\"#pages/third\">open third page</a>\r\n";});

this['JST']['template_example_page_3'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "    <p>Welcome to my third page.</p>\r\n    go back to second page <a href=\"#pages/second\">open second page</a>\r\n";});



this['JST']['_header'] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  


  return "<h1> The example page</h1>";});