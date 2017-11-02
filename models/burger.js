var orm = require("../config/orm.js");
//
// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.

// Export at the end of the burger.js file.
var burger = {

    selectAll: function (cb) {
        console.log("This is the model");
        orm.selectAll("burgers", function (res) {
            cb(res);  
        });
    },

    insertOne: function (table, columns, cb) {
        orm.insertOne("burgers", columns, function(res) {
            cb(res); 
        });
    },

    update: function (table, objColValues, condition, cb) {
        orm.update("burgers", objColValues, condition, function (res) {
            cb(res);
        });
    }
    

}

module.exports = burger;

