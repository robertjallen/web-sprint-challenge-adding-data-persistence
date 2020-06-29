
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('resource').del()
    .then(function () {
      // Inserts seed entries
      return knex('resource').insert([
        {name: 'resource1', description: ';lkjl;kj'},
        {name: 'resource2', description: ';lkjl;kj'},
        {name: 'resource3', description: ';lkjl;kj'}
      ]);
    });
};
