const db = require('../data/dbConfig')

function getProjects(){
  return db("project")
}

function findById(ID) {
  return db("project as p")
		.where("p.id", ID)
		.first("p.id", "p.name", "p.description", "p.completed")
}

function findResources(){
  return db("resource")
}

function getProjectResources(ID){
  return db("project as p")
    .where("p.id",  ID)
    .join("projects_resources as pr", "pr.project_id", "p.id")
    .join("resource as r", "r.id", "pr.resource_id")
    .select("r.name", "r.description", "p.name as project name")
}

function getTasks(ID){
  return db("project as p")
  .where("p.id", ID)
  .join("task as t", "t.project_id", "p.id")
  .select("p.name as project", "t.notes", "t.description", "t.completed") 
}

//////////////
//CREATE
//////////////
function add(p){
  return db('project').insert(p)
}

function addResource(r){
  return db('resource').insert(r)
}

function addProjectResources(r, ID){
  return addResource(r).then( id => {
    const rID = id[0]
    return db("projects_resources").insert({project_id: ID, resource_id: rID})
  })
}

////////////////
//    UPDATE
////////////////
function update(project, ID){
  return db('project').where({ id: ID }).update(project);
}

module.exports = {
  addResource,
  addProjectResources,
  add,
  getProjects,
  findById,
  findResources,
  getProjectResources,
  getTasks,
  update,
}