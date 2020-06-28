
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('task').del()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {project_id: 1, description: 'asfds1', notes: 'some stuff', completed: false},
        {project_id: 1, description: 'asfds1', notes: 'some stuff', completed: false},
        {project_id: 2, description: 'asfds2', notes: 'some stuff', completed: false},
        {project_id: 2, description: 'asfds2', notes: 'some stuff', completed: false},
        {project_id: 3, description: 'asfds3', notes: 'some stuff', completed: false},
        {project_id: 3, description: 'asfds3', notes: 'some stuff', completed: false},
      ]);
    });
};
