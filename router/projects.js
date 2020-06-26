const express = require('express');

const projects_model = require('../model/projects');

const router = express.Router();

router.get('/projects', async (req, res, next) => {
  try {
    const projects = await projects_model.find()
    res.json(projects)
  } catch (error) {
    next(error)
  }
});

module.exports = router;