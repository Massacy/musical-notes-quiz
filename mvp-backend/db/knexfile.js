// Update with your config settings.
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({ path: '.env.development' });
}
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'pg',
    connection: {
      user: process.env.POSTGRES_USER || "cc_008",
      database: process.env.POSTGRES_DB || "musical_notes_quiz",
    },
    migrations: {
      directory: "./migrations",
    },
    seeds: { directory: "./seeds" },
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: "./migrations",
    },
    seeds: { directory: "./seeds" },
  }
};
