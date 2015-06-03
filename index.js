var static = require('node-static');

var fileServer = new static.Server('./_site/');
require('http').createServer(function (request, response) {
      request.addListener('end', function () {
                fileServer.serve(request, response);
                    }).resume();
}).listen(process.env.PORT || 4000);
