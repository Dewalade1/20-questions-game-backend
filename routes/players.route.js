const express = require("express");
const auth = require("../middleware/auth")
const { body, validationResult } = require("express-validator");

const playersController = require("../controllers/players.controller");

const router = express.Router()

router.post("/signup", playersController.validate('signup'), playersController.signup)
router.post("/auth", auth, playersController.auth)


module.exports = router;