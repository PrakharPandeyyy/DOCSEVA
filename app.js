const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const path = require("path");

const app = express();

app.set("view engine", "ejs");
app.use("/public", express.static(__dirname + "/public"));
app.use("/views", express.static(__dirname + "/views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "views")));

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", function (req, res) {
  res.render("index");
});
app.get("/index", function (req, res) {
  res.render("index");
});
app.get("/blog", function (req, res) {
  res.render("blog");
});
app.get("/loginIntermediate", function (req, res) {
  res.render("loginIntermediate");
});
app.get("/patientLogin", function (req, res) {
  res.render("patientLogin");
});
app.get("/doctorLogin", function (req, res) {
  res.render("doctorLogin");
});
app.get("/chatbot", function (req, res) {
  res.render("chatbot");
});
app.get("/docDesc", function (req, res) {
  res.render("docDesc");
});
app.get("/patientDesc", function (req, res) {
  res.render("patientDesc");
});
app.get("/loginIntermediate", function (req, res) {
  res.render("loginIntermediate");
});
app.get("/temp", function (req, res) {
  res.render("temp");
});


app.listen(3000, function (req, res) {
  console.log("Server is online on Port:3000");
});
