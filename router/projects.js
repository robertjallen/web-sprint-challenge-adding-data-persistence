const express = require('express');

const model = require('../model/projects');

const router = express.Router();

///////////////////////////////////////////////////////////
//    READ
//////////////////////////////////////////////////////////

router.get('/projects', async (req, res, next) => {
  try {
    const projects = await model.getProjects()
    res.json(projects)
  } catch (error) {
    next(error)
  }
});

router.get('/resources', async (req, res, next) => {
  try {
    const resource = await model.findResources()
    res.json(resource)
  } catch (error) {
    next(error)
  }
});

router.get('/projects/:id', async (req, res, next) => {
  try {
    const project = await model.findById(req.params.id)
    res.json(project)
  } catch (error) {
    next(error)
  }
});

router.get('/projects/:id/resources', async (req, res, next) => {
  try {
    const resources = await model.getProjectResources(req.params.id)
    res.json(resources)
  } catch (error) {
    next(error)
  }
});

router.get('/projects/:id/tasks', async (req, res, next) => {
  try {
    const tasks = await model.getTasks(req.params.id)
    res.json(tasks)
  } catch (error) {
    next(error)
  }
});

////////////////////////////////////
//         CREATE
///////////////////////////////////
router.post('/projects', async (req, res, next) => {
  try {
    const project = await model.add(req.body)
    res.json(project)
  } catch (error) {
    next(error)
  }
});

router.post('/projects/:id/resources', async (req, res, next) => {
  try {
    // const resource = await projects_model.addResource(req.body)
    const projectResource = await model.addProjectResources(req.body, req.params.id)
    res.json(projectResource)
  } catch (error) {
    next(error)
  }
});

router.post('/resources', async (req, res, next) => {
  try {
    const resource = await model.addResource(req.body)
    res.json(resource)
  } catch (error) {
    next(error)
  }
});

////////////////////////////////
//   UPDATE
///////////////////////////////

router.put('/projects/:id', async (req, res, next) => {
  try {
    const resource = await model.update(req.body, req.params.id)
    res.json(resource)
  } catch (error) {
    next(error)
  }
});




module.exports = router;