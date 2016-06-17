//Modularized server.js file, should need few, if any, modifications
// Require the Express Module & creates express app
var express = require("express");
var app = express();
//Requires Mongoose Module & connects to mongodb 
 //User becomes an object Constructor!!

// Require body-parser (to recieve post data from clients)
//Require path module
var path = require("path");
// Integrate body-parser with our App
// Setting our Static Folder Directory
app.use(express.static(__dirname + "/client"));
// Setting our Views Folder Directory
// Setting our View Engine set to EJS

// Setting our Server to Listen on Port: 8800
app.listen(8888, function() {
    console.log("Node Online. Listening on port 8888");
})