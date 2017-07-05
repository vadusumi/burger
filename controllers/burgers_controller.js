
var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");


router.get("/", function(req, res){
	burger.selectAll(function(data){
		var handleBurgers = {
			burgers: data
		};
		console.log(handleBurgers);
		res.render("index", handleBurgers);
	});
});


router.post("/", function(req, res) {
	burger.insertOne(req.body.name, function(){
		res.redirect("/");
	});
});


router.put("/:id", function(req, res){
	burger.updateOne(req.body.devoured, function(){
		res.redirect("/");
	});
});


module.exports = router;