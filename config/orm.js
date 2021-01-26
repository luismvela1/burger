var connection = require("../config/connection.js");

var orm = {
    selectAll: function(table,cb){
        var queryString = "SELECT * FROM " + table;
        connection.query(queryString,function(err,res){
            if(err) throw err;
            cb(res);
        });
    },
    insertOne: function(table,colum,burgerinfo,cb){
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        console.log(colum);
        console.log(burgerinfo);
        connection.query(queryString, [table,colum,burgerinfo], function(err,res){
            if (err) throw err;
            cb(res);
        });
    },
    updateOne: function(table,colum,condition,cb){
        var queryString = "UPDATE ?? SET devoured = ? WHERE id = ?";
        console.log(colum);
        console.log(condition);
        connection.query(queryString,[table,colum,condition], function(err,res){
            if (err) throw err;
            cb(res);
        });
    }
};
module.exports = orm;