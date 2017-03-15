exports.up = function (knex, promise) {
    return knex.schema.createTable('user', (table) => {
        table.increments();
        table.string('username').notNullable().unique();
        // TODO: Store password as hash!!!!
        table.string('password').notNullable();
        table.string('email').notNullable().unique();
        table.string('penname');
        table.string('gender');
        table.date('date_of_birth');
        table.string('location');
        table.text('bio');
        table.timestamps();
    });
};

exports.down = function (knex, promise) {
    return knex.schema.dropTable('user');
};
