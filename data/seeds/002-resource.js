
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('resource').del()
    .then(function () {
      // Inserts seed entries
      return knex('resource').insert([
        {name: 'https://devhints.io/knex#schema', description: "knex cheat sheet"},
        {name: 'TK', description: "training kit curriculum"},
        {name: 'monster', description: "energy drink"}
      ]);
    });
};
