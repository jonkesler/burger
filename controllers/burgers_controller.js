var express = require("express");

var router = express.Router();

var burgers = require("../models/burger.js");


router.get("/", function(req, res) {
  burgers.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    console.log("hbsObject");
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  var newBurger = {
    burger_name: req.body.burger_name,

    // devoured: JSON.parse(req.body.devoured.toLowerCase())
    devoured: false
  };
  burgers.create(newBurger, function(result) {
    console.log(newBurger);
    // Send back the naem of new burger
    res.json({ id: result.insertId });
  });
});


router.put("/api/burgers/:id", function(req, res) {
  var condition = { id: req.params.id };
  console.log("condition", condition);
  burgers.update(
    {
      // devoured: JSON.parse(req.body.devoured.toLowerCase())
      // devoured: JSON.parse(req.body.devoured)
      // devoured: req.body.devoured
      devoured: true
    },
    condition,
    function(result) {
      if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(204).end();
    }
  );
});


module.exports = router;
