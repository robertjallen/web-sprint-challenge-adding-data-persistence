
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
    tbl.integer('project_id')
        // forces integer to be positive
        .unsigned()
        .notNullable()
        .references('id')
        // this table must exist already
        .inTable('project')

     //description
     tbl.text('description').notNullable();
     //notes
     tbl.text('notes').notNullable();
     //completed
     tbl.boolean('completed').defaultTo(false)   
  })

  await knex.schema.createTable('projects_resources', tbl => {
    //project_id
    tbl.integer('project_id')
        .unsigned()
        .notNullable()
        .references('id')
        // this table must exist already
        .inTable('project')

    //resource_id
    tbl.integer('resource_id')
        .unsigned()
        .notNullable()
        .references('id')
        // this table must exist already
        .inTable('resource')
  })
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('projects_resources')
  await knex.schema.dropTableIfExists('task')
  await knex.schema.dropTableIfExists('resource')
  await knex.schema.dropTableIfExists('project')
};
