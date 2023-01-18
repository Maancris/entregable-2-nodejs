const {Sequelize} = require ('sequelize');
require('dotenv').config()
// crear una instancia con parametros d configuracion de base de datos 
const db = new Sequelize ({
    //obejo de configuracion, son las credenciales de mi base de datos
    database: process.env.DB_NAME,
    username: process.env.DB_USER,
    host:process.env.DB_HOST,
    post: process.env.DB_PORT,
    password: process.env.DB_PASSWORD,
    dialect: "postgres",
    logging: false
});

module.exports = db;