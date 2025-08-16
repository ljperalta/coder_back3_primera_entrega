const express = require("express");
const router = express.Router();
const pets = require("./pets");
const users = require("./users");

router.use("/api/mocks", pets);
router.use("/user", users);

module.exports = router;