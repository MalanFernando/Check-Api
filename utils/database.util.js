const {Sequelize, DataTypes} = require('sequelize')
//connect DB
const db = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'ferdev1750',
    port: 5432,
    database: 'Check-Api'
});

module.exports = {db, DataTypes}