
exports.up = async function(knex) {
  await knex.schema.createTable('project', tbl => {
    // creates a primary key called id
    tbl.increments();
    // creates a text field called name which is both required and unique
    tbl.text('name').notNullable();
    // creates a text field called description which is required
    tbl.text('description').notNullable();
    tbl.boolean('complete').defaultTo(false);
  });

  await knex.schema.createTable('resource', tbl => {
    // creates a primary key called id
    tbl.increments()
    // creates a text field called name which is both required and unique
    tbl.text('name').notNullable();
    // creates a text field called description which is required
    tbl.text('description').notNullable();
  })

  await knex.schema.createTable('task', tbl => {
    
  })
};

exports.down = async function(knex) {
  
};
