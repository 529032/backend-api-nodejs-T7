const express = require('express')
const port = require('./routes')

module.exports= function(server){
const protectApi =express.Router()
server.use("/api", protectApi)
server.use("status" , (req, res) => 
res.send(`BACKEND is runner on port ${port} .`)
);

server.use(express.static(require("path").join(_dirname, "../public")))

}
