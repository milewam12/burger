var orm = require("../config/orm.js");
//
// Also inside burger.js, create the code that will call the ORM functions using burger specific input for the ORM.

// Export at the end of the burger.js file.
var burger = {
    selectAll: function (cb) {
        // console.log("This is the model");
        orm.selectAll("burgers", function (res) {
            cb(res);  
        });
    },
    insertOne: function (name, cb) {
        orm.insertOne("burgers", ["burger_name", "devoured"], [name, false], cb);
    },

    update: function (id, cb) {
       var condition = "id=" + id;
       orm.update("burgers", {
           devoured: true }, condition, cb);
    }  
};

module.exports = burger;

