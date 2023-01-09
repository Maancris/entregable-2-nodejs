const {Sequelize} = require ('sequelize');
// crear una instancia con parametros d configuracion de base de datos 
const db = new Sequelize ({
    //obejo de configuracion, son las credenciales de mi base de datos
    database: "todoapp",
    username: "postgres",
    host:"localhost",
    post: "5432",
    password: "ruut",
    dialect: "postgres"
});

module.exports = db;