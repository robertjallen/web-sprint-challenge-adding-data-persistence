const express = require('express');

const model = require('../model/projects');

const router = express.Router();

router.get('/projects', async (req, res, next) => {
  try {
    const projects = await model.getProjects()
    res.json(projects)
  } catch (error) {
    next(error)
  }
});

module.exports = router;