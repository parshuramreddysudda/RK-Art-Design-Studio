import express from "express";
// const require = createRequire(import.meta.url);
const express = import('express'); 

const bodyParser = require("body-parser");

const bodyParser = import("body-parser");
const app = express();

const server = http.createServer(process.env.PORT || 3000)
 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get('/', function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.listen(server, function (req, res) {
    console.log("Server on port 3000");
});