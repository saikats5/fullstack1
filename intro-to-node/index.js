//jshint esversion:6
//const fs = require("fs");
//fs.copyFileSync("file1.txt", "file2.txt");
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", function(request, response){
    response.sendFile(__dirname + '/index.html');
    //console.log(__dirname);
    //.send("<h1>Hello World</h1>");
});

app.post("/", function(req, res){
    //console.log(req.body.num1);
    var num1 = Number(req.body.num1); // default go as string has to convert to Number
    var num2 = Number(req.body.num2);
    var result = num1 + num2;
    res.send("Thanks " + result);
});

app.get("/contact", function(req, res){
    res.send("<h1>Contact me</h1>");
    //res.sendFile("index.html");
});

app.listen(3000, function(){
    console.log("Server has started on Port 3000");
});