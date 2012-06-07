/*
 * Grunt Task File
 * ---------------
 *
 * Task: JST-HB
 * Description: Compile handlebars templates to JST file.
 * Dependencies: underscore@1.2.4
 *
 */

task.registerBasicTask("jsthb",
  "Compile handlebars templates to JST file", function(data, name) {

  // If namespace is specified use that, otherwise fallback
  var namespace = config("options.jst.namespace") || "JST";
  // If template settings are available use those
  var templateSettings = config("options.jst.templateSettings") || null;
  // Expand files to full paths
  var files = file.expand(data);

  // Create JST file.
  file.write(name, task.helper("jsthb", files, namespace, templateSettings));

  // Fail task if errors were logged.
  if (task.hadErrors()) { return false; }

  // Otherwise, print a success message.
  log.writeln("File \"" + name + "\" created.");
});

task.registerHelper("jsthb", function(files, namespace, templateSettings) {
  // Ensure we get the underscore from the node_modules folder
  var Handlebars = require("handlebars");

  // Comes out looking like this["JST"] = this["JST"] || {};
  var contents = "(function() {\n  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};\n";

  // Compile the template and get the function source
  contents += files ? files.map(function(filepath) {
    var templateFunction = 'templates[\'' + filepath + '\'] = template(' + Handlebars.precompile(file.read(filepath)) + ');\n';

    return templateFunction;
  }).join("\n\n") : "";

  return contents + "})();";
});