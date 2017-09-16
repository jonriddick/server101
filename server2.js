// Here we require/import the HTTP module
var http = require("http");

// Here we define a port to listen to
var PORT = 7000;
var PORT2 = 7500;

// Here we create a generic function to handle requests and responses
function niceRequest(request, response) {
	//console.log(request);

  // The below statement is triggered (client-side) when the user visits the PORT URL
  response.end("You are awesome!");
}

function lessNiceRequest(request, response) {
	//console.log(request);

  // The below statement is triggered (client-side) when the user visits the PORT URL
  response.end("You are slightly less awesome?");
}

// Here we use the Node HTTP package to create our server.
// We then pass it the handleRequest function to empower it with functionality.
var server = http.createServer(niceRequest);
var server2 = http.createServer(lessNiceRequest)

// Here we start our server so that it can begin listening to client requests.
server.listen(PORT, function() {

  // The below statement is triggered (server-side) when a user visits the PORT URL
  console.log("You are listening on port 7000, good job!", PORT);

});

// Here we start our server so that it can begin listening to client requests.
server2.listen(PORT2, function() {

  // The below statement is triggered (server-side) when a user visits the PORT URL
  console.log("You are listening on port 7500, even better job!", PORT2);

});