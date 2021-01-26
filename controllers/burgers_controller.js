var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");


router.get("/", function(req,res){
    burger.selectAll(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index",hbsObject);
    });
});
router.post("/",function(req,res){
    burger.insertOne("burger_name",req.body.burger_name,function(){
        res.redirect("/");
    });
});
router.put("/:id",function(req,res){
    var condition = req.params.id;
    burger.updateOne(req.body.devoured,condition,function(){
        res.redirect("/");   
    })
    
});
module.exports = router;