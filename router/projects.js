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

router.get('/projects/:id/resources', async (req, res, next) => {
  try {
    const resources = await projects_model.getProjectResources(req.params.id)
    res.json(resources)
  } catch (error) {
    next(error)
  }
});

router.get('/projects/:id/tasks', async (req, res, next) => {
  try {
    const tasks = await projects_model.getTasks(req.params.id)
    res.json(tasks)
  } catch (error) {
    next(error)
  }
});

module.exports = router;