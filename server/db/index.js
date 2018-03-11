// 'use strict'
// const chalk = require('chalk');
// const Sequelize = require('sequelize');
// const pkg = require('../../package.json');

// console.log(chalk.yellow("Opening database connection"));

// module.exports = new Sequelize(`postgres://localhost:5432/trails`, {
//   logging: false, // true for debugging purposes, false for brevity 
// });

// // don't forget to run our models files and make all associations for our Sequelize objects (if you do it here consider circular references)


const Sequelize = require('sequelize')
const pkg = require('../../package.json')

const databaseName = pkg.name + (process.env.NODE_ENV === 'test' ? '-test' : '')

const db = new Sequelize(
  process.env.DATABASE_URL || `postgres://localhost:5432/trails`,
  {
    logging: true
  }
)
module.exports = db