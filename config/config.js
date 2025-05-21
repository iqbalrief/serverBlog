require('dotenv').config();

const config = {
  development: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres"
  },
  test: {
    username: process.env.DBTEST_USERNAME,
    password: process.env.DBTEST_PASSWORD,
    database: process.env.DBTEST_DATABASE,
    host: process.env.DBTEST_HOST,
    port: process.env.DBTEST_PORT,
    dialect: "postgres"
  },
  production: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres"
  }
}
module.exports = config;