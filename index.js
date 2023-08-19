
const express = import('express'); 

const bodyParser = import("body-parser");

const app = express();

 
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get('/', function(req, res){
    res.sendFile(__dirname + "/index.html");
});

app.listen(process.env.port || 3000, function (req, res) {
    console.log("Server on port 3000");
});