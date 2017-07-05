var express = require("express");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");

var port = process.env.PORT || 3000;

//SQL connection
var connection = require("./config/connection.js");


var app = express();

//Static content served from public folder
app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: false }));

//Override with POST having ?_method=PUT
app.use(methodOverride("_method"));

//Handlebars
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Importing routes
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);


//Listener
app.listen(port);