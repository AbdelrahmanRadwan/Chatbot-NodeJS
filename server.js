var http = require('http');

function onRequest(request, response)
{
	console.log('A user made a request ' + request.url);
	response.writeHead(200, {'Context-type':"text/plain"});
	response.write('here is the response');
	response.end()
};
http.createServer(onRequest).listen(8888);
console.log('server is running...')