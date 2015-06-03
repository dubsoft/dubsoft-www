var static = require('node-static');

var fileServer = new static.Server('./jekyll-site/_site/');
require('http').createServer(function (request, response) {
      request.addListener('end', function () {
                fileServer.serve(request, response);
                    }).resume();
}).listen(process.env.PORT || 4000);
