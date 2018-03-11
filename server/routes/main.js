const express = require("express");
const router = express.Router();
const Trails = require("./trails.js")

router.use("/api/trails", Trails);

module.exports = router;
