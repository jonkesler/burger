// Import MySQL connection.
var connection = require("../config/connection.js");



// Export the orm object for the model (cat.js).
module.exports = function(table) {

  return {
    selectAll: function(cb) {
      connection.query("SELECT * FROM ??", [table], function(err, result) {
        if (err) throw err;

        cb(result);
      });
    },
    // condition in object form: { id: 1 }
    // findBy: function(condition, cb) {
    //   connection.query("SELECT * FROM ?? WHERE ?", [table, condition], function(err, result) {
    //     if (err) throw err;

    //     cb(result);
    //   })
    // },
    // An example of newRow would be {name: "panther", sleepy: true}
    // create: function(newRow, cb) {
    insertOne: function(newRow, cb) {

      connection.query("INSERT INTO ?? SET ?", [table, newRow], function(err, result) {
        if (err) throw err;
        
        cb(result);
      });
    },
  
    // condition in object form: { id: 1 }
    updateOne: function(updatedObj, condition, cb) {
      connection.query("UPDATE ?? SET ? WHERE ?", [table, updatedObj, condition], function(err, result) {
        if (err) throw err;

        cb(result);
      });
    },
  } 
}
