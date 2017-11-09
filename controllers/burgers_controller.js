var express = require("express");
var burger = require("../models/burger.js")
var router = express.Router();


//ROUTES

//INDEX
router.get("/", function (req, res) {
    res.redirect("/burgers");
    
})

router.get("/burgers", function (req, res) {
    // console.log("This is the CONTROLLER");
    burger.selectAll(function (data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
    // res.send("hola");
});
// post route to insert a burger
router.post("/burgers/insertone", function (req, res) {
    burger.insertOne(req.body.burger_name, function (result) {
            res.redirect("/")
        });
});

router.put("/burgers/update", function (req, res) {
    // var condition = "id = " + req.params.id;

    burger.update( req.body.devoured, function (result) {
        console.log(result);
            res.redirect("/");
        });

    });


module.exports = router;