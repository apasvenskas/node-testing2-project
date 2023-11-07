const express = require("express")
const server = express()
const router = require('./api/router')

server.use(express())
server.use("/jokes", router)

module.exports = server