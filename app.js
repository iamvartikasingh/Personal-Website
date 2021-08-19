var express=require("express");
const path=require('path');
var http=require("http");
var bodyParser=require("body-parser");
const app = express();

var server=http.createServer(app);
app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname , './public')));
app.set("view engine", "ejs");

// app.use(express.static("public"));
app.get("/", function(req, res){
	res.sendFile(path.join(__dirname, './views/index.html'));
});



app.get("/projects", function(req,res){
 res.render("projects")
})
app.get("/skills", function(req,res){
  res.render("skills")
 })

 app.get("/resume", function(req,res){
  res.render("resume")
 })
 app.get("/blogs", function(req,res){
  res.render("blogs")
 })
 app.get("/contact", function(req,res){
  res.render("contact")
 })
app.listen(3000, function() {
  console.log("Server started on port 3000");
});

