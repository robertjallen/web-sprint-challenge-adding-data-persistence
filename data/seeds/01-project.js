
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('project').del()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {name: 'project1', description: "lkhlkjhkjhdg", completed: false},
        {name: 'project2', description: "lkhlkjhkjhsdf", completed: false},
        {name: 'project3', description: "lkhlkjhkjhsdfs", completed: false}
      ]);
    });
};
