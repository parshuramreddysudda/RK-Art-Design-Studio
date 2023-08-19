import express from "express";

import { createRequire } from "module";

const require = createRequire(import.meta.url);
const express = require('express'); 

const bodyParser = require("body-parser");

const app = express();

 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get('/', function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.listen(process.env.port || 3000, function (req, res) {
    console.log("Server on port 3000");
});