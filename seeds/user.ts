/*
 * This file creates some sample data and inserts it into the server
 */
exports.seed = function(knex, Promise) {
    // Deletes ALL existing entries
    return knex("user").del()
        .then(function() {
            // Create some table users
            const users = [{
                first_name: "Akshay",
                last_name: "Pathak",
                age: 18,
                username: "spectre10"
            }, {
                    first_name: "Daniel",
                    last_name: "Liu",
                    age: 18,
                    username: "candyland"
                }, {
                    first_name: "Golan",
                    last_name: "Cheifetz",
                    age: 17,
                    username: "golche777"
                }];

            // Insert the data
            return knex("user").insert(users);
        });
};
