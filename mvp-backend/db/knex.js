const knex = require("knex");
const knexConfig = require("./knexfile")[process.env.NODE_ENV];
console.log("knexConfig here : ", knexConfig);
module.exports = knex(knexConfig);