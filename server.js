require('dotenv').config()

const express = require('express')
const bodyParser = require('body-parser')
const expressValidator = require('express-validator')

const app = express()

const mainRoute = require("./routes/main.route")

const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT

app.use(bodyParser.json())

app.use('/', mainRoute)

app.listen( port , () => {
    console.log(`[+] Twenty-Questions server running on port ${port}`)
})