const express = require('express');
const cors = require('cors');

const authRouter = require('../routes/auth-router.js');
const plantsRouter = require('../routes/plants-router.js');
const restricted = require('../middleware/authenticator.js');

const server = express();

server.use(cors());
server.use(express.json());

server.use('/api/auth', authRouter);
server.use('/api', restricted, plantsRouter)

server.get("/", (req, res) => {
    res.json({ message: "Server up and running" });
  });
  
  module.exports = server;