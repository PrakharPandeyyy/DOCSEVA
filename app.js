const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const path = require('path')

const app = express();

app.set('view engine', 'ejs');


app.use(express.static(path.join(__dirname, 'public')));

app.use('/public', express.static(__dirname + "/public"));


app.use(bodyParser.urlencoded({
  extended: true
}));



app.get("/",function(req,res){

    res.render("index");

});
app.get("/blog",function(req,res){

  res.render("blog");

});
app.get("/temp",function(req,res){
  
      res.render("template1");
  
})

app.listen(3000,function(req,res){
    console.log("Server is online on Port:3000");
});