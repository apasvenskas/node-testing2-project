const express = require("express")
const server = express()
const router = require('./api/projectsRouter')

server.use(express())
server.use("/projects", router)

module.exports = server