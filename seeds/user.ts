/*
 * This file creates some sample data and inserts it into the server
 */
exports.seed = function (knex, promise) {
    // Deletes ALL existing entries
    return knex('user').del()
        .then(() => {

            // Get the current date
            const date = new Date();

            // Create some table users
            const users = [{
                username: 'spectre10',
                password: 'supersecret',
                email: 'akshaypathak1011@gmail.com',
                created_at: date,
                updated_at: date,
            }, {
                username: 'candyland',
                password: 'password',
                email: 'candylander@yahoo.com',
                created_at: date,
                updated_at: date,
            }, {
                username: 'golche888',
                password: '123456',
                email: 'goldcdsalk5551@gmail.yahoo.ca',
                created_at: date,
                updated_at: date,
            }];

            // Insert the data
            return knex('user').insert(users);
        });
};
