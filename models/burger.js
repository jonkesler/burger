var orm = require("../config/orm.js");

var burger = {
    all: function(cb) {
      burgerRepo.selectAll(function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(newRow, cb) {
      burgerRepo.insertOne(newRow, function(res) {
        cb(res);
      });
    },
    update: function(updatedRow, condition, cb) {
      burgerRepo.updateOne(updatedRow, condition, function(res) {
        cb(res);
      });
    },
  };
  
  // Export the database functions for the controller (catsController.js).
  module.exports = burger;