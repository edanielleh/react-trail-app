const express = require("express");
const router = express.Router();
const Trails = require("../db/models/trails.js");


router.get("/", function(req, res, next){
    Trails.findAll()
    .then(allTrails => res.json(allTrails))
    .catch(next);
});

router.get("/:id", function(req, res, next) {
    Trails.findById(req.params.id)
    .then(trail => res.json(trail))
    .catch(next);
  });

  router.get("/:difficulty", (req, res, next) => {
    Trails.findAll({
      where: {
        difficulty: req.params.difficulty
      }
    })
    .then(trails => res.json(trails))
    .catch(next);
  });

module.exports = router;


  