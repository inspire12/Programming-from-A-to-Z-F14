var servi = require('servi');
var app = new servi(true);

port(8080);

serveFiles("public");

route('/thing/:name/:num', doThing);

function doThing(request) {
  // Query String
  var name = request.params['name'];
  var num = request.params['num'] || 1;
  var output = '';
  for (var i = 0; i < num; i++) {
    output += "Thanks for doing your thing, " + name + '<br/>';
  }
  request.respond(output);
}

start();