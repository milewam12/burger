var connection = require("../config/connection.js");


//helper functions
function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }


  function objToSql(ob) {
    var arr = [];
  
    for (var key in ob) {
      var value = ob[key];
     
      if (Object.hasOwnProperty.call(ob, key)) {
   
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
    
        arr.push(key + "=" + value);
      }
    }
    return arr.toString();
  }
  

// In the orm.js file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.
var orm = {

    selectAll: function (tableInput, cb) {
      console.log("This is the ORM");
        var queryString = "SELECT * FROM ?? ";
       var query = connection.query(queryString, [tableInput], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
        console.log(query.sql);
    },



    insertOne: function (table, columns, values, cb) {
        // var queryString = "INSERT INTO " + table;
         var queryString = "INSERT INTO  ??"; 

        queryString += " (";
        queryString += columns.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(values.length);
        queryString += ") ";
    
        console.log(queryString);
    
        connection.query(queryString, values, function(err, result) {
          if (err) {
            throw err;
          }
    
          cb(result);
        
    });
    //INSERT INTO burgers (col1, col2) VALUES ('string', true);
},

update:function (table, objColValues, condition, cb) {
    var queryString = "UPDATE ?? ";

    queryString += " SET ";
    queryString += objToSql(objColVals);
    queryString += " WHERE ";
    queryString += condition;

    console.log(queryString);
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }

      cb(result);
    });
    
}
// UPDATE burgers SET objColValues WHERE condition;

};

module.exports = orm;
