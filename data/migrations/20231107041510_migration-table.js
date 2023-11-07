
exports.up = function(knex) {
    return knex.schema
  .createTable("projects", tbl => {
    tbl.increments("project_id")
    tbl.text("project_name").notNullable()
    tbl.string("url", 255).notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema
  .dropTableIfExists("projects");
};
