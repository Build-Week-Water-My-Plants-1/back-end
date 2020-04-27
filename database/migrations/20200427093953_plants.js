exports.up = function (knex) {
  return knex.schema
    .createTable('users', (users) => {
      users.increments();
      users.string('username', 255).notNullable().unique().index();
      users.string('password', 255).notNullable();
      users.string('phone_number').notNullable().unique().index();
    })

    .createTable('plants', (plants) => {
      plants.increments().unique();
      plants.string('common_name', 255).notNullable().unique().index();
      plants.string('scientific_name', 255).notNullable().unique().index();
    });
};

exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists('plants').dropTableIfExists('users');
};
