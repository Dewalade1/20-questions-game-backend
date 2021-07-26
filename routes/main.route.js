const express = require("express");

const playersRoute = require("./players.route");

const router = express.Router()

router.get('/', (req, res, next) => {
    return res.status(200).send("Welcome to the backend of expeditemovers website")
})

router.use('/players', playersRoute)

module.exports = router;