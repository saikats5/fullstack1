//jshint esversion:6
//const fs = require("fs");
//fs.copyFileSync("file1.txt", "file2.txt");
const express = require("express");
const app = express();

app.get("/", function(request, response){
    response.send("<h1>Hello World</h1>");
})

app.listen(3000, function(){
    console.log("Server has started on Port 3000");
});