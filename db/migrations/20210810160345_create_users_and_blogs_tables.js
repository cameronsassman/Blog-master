
exports.up = function(knex) {
  return knex.schema
  .createTable('Content', table => {
      table.increments('id');
      table.string('Title', 255).notNullable();
      table.string('Article', 2000).notNullable();
      table.timestamps(true, true);
  })
  .createTable('User', table => {
      table.increments('id');
      table.string('Name', 255).notNullable();
      table.string('Surname', 255).notNullable();
      table.string('Email', 255).notNullable();
      table.string('Username', 255).notNullable();
      table.string('Password', 255).notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTable('Content')
  .dropTable('User');   
};
