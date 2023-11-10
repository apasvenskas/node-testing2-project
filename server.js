const express = require("express")
const server = express()
const router = require('./api/projectsRouter')

server.use(express.json())
server.use("/projects", router)

server.get('/', function (req, res) {
    res.send('Hello, this is the default page of my server.');
  });

module.exports = server