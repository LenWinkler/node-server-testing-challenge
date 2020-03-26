
exports.up = function(knex) {
  return knex.schema
  .createTable('books', tbl => {
      tbl.increments();

      tbl.string('title', 256).unique().notNullable();
      tbl.string('author', 128).notNullable();
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('books');
};
