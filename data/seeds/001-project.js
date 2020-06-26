
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('project').del()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {name: 'relational databases', description: "how to write (SQL) to communicate with Relational DMS", completed: false},
        {name: 'database design', description: "create schemas using both SQLite Studio and Knex", completed: false},
        {name: 'multi table queries', description: "query data from multiple tables", completed: false}
      ]);
    });
};
