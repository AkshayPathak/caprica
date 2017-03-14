// For development, we use a simple connections

// This is to enable ssl
let pg = require("pg");
pg.defaults.ssl = true;

module.exports = {
  development: {
    client: "postgresql",
    connection: "postgres://kfmhhucjfwtayf:24cb6e1c48c4e84ab0ff4375f919730f42941ca3d6f00ec41da696e0344086ed@ec2-54-235-247-224.compute-1.amazonaws.com:5432/d6is6clct9jtp2",
  },
};
