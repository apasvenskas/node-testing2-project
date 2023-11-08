// Update with your config settings.
// const req =require('./data/seed')
module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./dev.sqlite3",
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seed",
    },
  },
  testing: {
    client: "sqlite3",
    connection: {
      filename: "./test.sqlite3",
    },
    migrations: {
      tableName: "knex_migrations",
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seed",
    },
  },
};
