var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb){
        orm.selectAll("burgers",function(data){
            cb(data);
        });
    },
    insertOne: function(colum,columValue,cb){
        orm.insertOne("burgers",colum,columValue, function(data){
            cb(data);
        });
    },
    updateOne: function(colum,condition,cb){
        orm.updateOne("burgers",colum,condition, function(data){
            cb(data);
        });
    }

};
module.exports = burger;