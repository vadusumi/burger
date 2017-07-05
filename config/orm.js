
var connection = require("./connection.js");


var orm = {
	selectAll: function(tableName, cb){
		connection.query("Select * FROM ??", [tableName], function(err, result) {
			if (err) throw err;
    		cb(result);
    	});
	},
	insertOne: function(tableName, col1, col2, colOneInput, colTwoInput, cb){
		connection.query("INSERT INTO ??(??,??) VALUES(??,??)", [tableName, col1, col2, colOneInput, colTwoInput], function(err, result){
			if (err) throw err;
			cb(result);
		});
	},
	updateOne: function(tableName, colName, colValue, idCol, cb){
		connection.query("UPDATE ?? SET ?? = ? WHERE ?? = ??.id", [tableName, colName, colValue, idCol, tableName], function(err, result){
			if (err) throw err;
			cb(result);
		});
	}
};



module.exports = orm;
