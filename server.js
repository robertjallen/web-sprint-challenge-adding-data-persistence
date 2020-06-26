const express = require('express');
const ProjectsRouter = require('./router/projects')

const server = express();

server.use(express.json());
server.use(ProjectsRouter);

server.get('/', (req, res) => {
  res.send('projects on deck...')
})

module.exports = server;