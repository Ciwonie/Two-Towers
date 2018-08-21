var http = require('http');

var PORTONE = 7000;

var PORTTWO = 7500;

var niceRequest = (req, res) => {
    res.end("Would I rather be feared or loved? Easy. Both. I want people to be afraid of how much they love me " 
    + req.url)
} 

var badRequest = (req, res) => {
    re.end("Why are you the way you are? Go back to the annex." + req.url)
}

var serverOne = http.createServer(niceRequest);

var serverTwo = http.createServer(badRequest);

serverOne.listen(PORTONE, function() {
    console.log("Server listening on: http://localhost:" + PORTONE)
})

serverTwo.listen(PORTTWO, function() {
    console.log("Server listening on: http://localhost:" + PORTTWO)
})