var express = require("express");

var router = express.Router();

var burgers = require("../models/burger.js");


router.get("/", function(req, res) {
  burgers.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/api/burgers", function(req, res) {
  var newBurger = {
    burger_name: req.body.name,
    devoured: JSON.parse(req.body.devoured.toLowerCase())
  };
  burgers.create(newBurger, function(result) {
    // Send back the naem of new burger
    res.json({ burger_name: result.burger_name });
  });
});


router.put("/api/burgers/:id", function(req, res) {
  var condition = { id: req.params.id };
  console.log("condition", condition);
  burgers.update(
    {
      devoured: JSON.parse(req.body.devoured.toLowerCase())
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
