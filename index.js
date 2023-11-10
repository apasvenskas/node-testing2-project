const server = require("./server.js")

const port = process.env.PORT || 1234

server.listen(port, () => { console.log("Port running on " + port);
})