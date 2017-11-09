var express = require("express");
var methodOverride = require ("method-override");
var bodyParser = require ("body-parser");


var PORT = process.env.PORT || 3000;

var app = express();

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));
// Handlebars.
var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// Importing routes 
var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);
app.use("/update", routes);
app.use("/insert", routes);


app.listen(PORT, function() {
    console.log("Listening on port: ", PORT);
  });
  