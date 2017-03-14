/*
 * This file gets the Knex database connection
 */
const environment = process.env.NODE_ENV || 'development';
const config = require('../knexfile')[environment];
module.exports = require('knex')(config);
