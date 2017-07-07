
var express = require("express");

var router = express.Router();

var burger = require("../models/burger.js");


router.get("/", function(req, res){
	burger.selectAll(function(data){
		var handleBurgers = {
			burgers: data
		};
		console.log(JSON.parse(JSON.stringify(handleBurgers)));
		var burgerList = handleBurgers.burgers;
		console.log(burgerList)
		res.render("index", {burgerList});
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