
exports.up = async function(knex) {
  await knex.schema.createTable('project', tbl => {
    // creates a primary key called id
    tbl.increments("id");
    // creates a text field called name which is both required and unique
    tbl.text('name').unique().notNull();
    tbl.text('description').notNull();
    tbl.boolean('completed').defaultTo(false)
  });

  await knex.schema.createTable('task', tbl => {
    // creates a text field called name which is both required and unique
    tbl.text('notes').unique().notNull();
    tbl.text('description').notNull();
    tbl.boolean('completed').defaultTo(false)

    //foreign key
    tbl
      .integer("project_id")
      .references("id")
      .inTable("project")
      .onDelete("SET NULL")
  });

  await knex.schema.createTable('resource', tbl => {
    // creates a primary key called id
    tbl.increments("id");
    // creates a text field called name which is both required and unique
    tbl.text('name').unique().notNull();
    tbl.text('description').notNull();
  });

  await knex.schema.createTable('projects_resources', tbl => {
    //foreign key
    tbl
      .integer("project_id")
      .references("id")
      .inTable("project")
      .onDelete("SET NULL")

    //foreign key
    tbl
      .integer("resource_id")
      .references("id")
      .inTable("resource")
      .onDelete("SET NULL")  
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists('projects_resources');
  await knex.schema.dropTableIfExists('resource');
  await knex.schema.dropTableIfExists('task');
  await knex.schema.dropTableIfExists('project');
};
