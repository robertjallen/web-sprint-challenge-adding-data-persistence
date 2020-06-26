
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('task').del()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {project_id: 1, description: 'Write Basic Queries', notes: 'Learn SQL', completed: false},
        {project_id: 2, description: 'Using knex migrations, design and write a schema', notes: 'Learn SQL', completed: false},
        {project_id: 3, description: 'Write helpers methods in schema', notes: 'Learn SQL', completed: false}
      ]);
    });
};
