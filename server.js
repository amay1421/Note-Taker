const fs = require("fs")
const express = require("express")
const path = require("path")

// Server setup
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(__dirname + '/public'));

//Routes
app.get("/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
  });

app.get("/api/notes", function(req, res) {
    res.sendFile(path.join(__dirname, "/db/db.json"));
  });

//Listener
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });