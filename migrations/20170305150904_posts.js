
exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', function(table) {
    table.increments('id').primary().notNullable();
    table.string('text').notNullable();
  });
};

exports.down = function(knex, Promise) {
  throw new Error('no revert')
};
