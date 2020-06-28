
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('project').del()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {name: 'project1', description: "lkhlkjhkjhdg", complete: false},
        {name: 'project2', description: "lkhlkjhkjhsdf", complete: false},
        {name: 'project3', description: "lkhlkjhkjhsdfs", complete: false}
      ]);
    });
};
