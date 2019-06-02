const bodyParser = require('body-parser')
const express = require('express')

const server = express()

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

server.listen(3333)

module.exports = server