var http = require('http');

var PORTONE = 7000;

var PORTTWO = 7500;

var niceRequest = (req, res) => {
    response.end("You're Greeeeeeat " + req.url)
} 

var badRequest = (req, res) => {
    response.end("You're not so greeeeeeaat " + req.url)
}

var serverOne = http.createServer(niceRequest);

var serverTwo = http.createServer(badRequest);

serverOne.listen(PORTONE, function() {
    console.log("Server listening on: http://localhost:" + PORTONE)
})

serverTwo.listen(PORTTWO, function() {
    console.log("Server listening on: http://localhost:" + PORTTWO)
})