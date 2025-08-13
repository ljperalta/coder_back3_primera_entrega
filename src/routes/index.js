const express = require("express");
const router = express.Router();
const pets = require("./pets");

router.use("/api/mocks", pets);

module.exports = router;