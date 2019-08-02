var HOST = '127.0.0.1';
var PORT = 3000;

var express = require('express');
var app = express();

app.use(function(req, res) {
    res.send({
        method: req.method,
        path: req.path,
        headers: req.headers
    })
});

app.listen(PORT, function(err) {
    if (err) console.log("ERROR: " + err);
    else console.log("SUCCESS: Server started at PORT " + PORT);
});
