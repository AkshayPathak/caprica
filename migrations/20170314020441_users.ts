
exports.up = function(knex, Promise) {
    return knex.schema.createTable("user", (table) => {
        table.increments();
        table.text("first_name").notNullable();
        table.text("last_name").notNullable();
        table.integer("age").notNullable();
        table.string("username").notNullable();
        table.timestamps();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable("user");
};
