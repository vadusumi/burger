
var orm = require("../config/orm.js");


var burger = {

	selectAll: function(cb){	
		orm.selectAll("burgers", function(res){
			cb(res);
		});
	},
	insertOne: function(burgerName, cb){
		orm.insertOne("burgers", "burger", "devoured", burgerName, "false", function(res){
			cb(res);
		});
	},
	updateOne: function(idCol, cb){
		orm.updateOne("burgers", "devoured", "true", idCol, function(res){
			cb(res);
		});
	}
};

module.exports = burger;