var HOST = '127.0.0.1';
var PORT = 3000;

const express = require('express')
const random = require('random')

var app = express();
var identifier = random.float()

app.use(function(req, res) {
    res.send({
        method: req.method,
        path: req.path,
        headers: req.headers,
        server: identifier
    })
});

app.listen(PORT, function(err) {
    if (err) console.log("ERROR: " + err);
    else console.log("SUCCESS: Server started at PORT " + PORT);
});
