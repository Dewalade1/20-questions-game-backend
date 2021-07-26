const express = require("express");
const { body, validationResult } = require("express-validator");

const playersController = require("../controllers/players.controller");

const router = express.Router()

router.post("/signup", playersController.validate('signup'),playersController.signup)


module.exports = router;