const database = require('../config/index');
const Sequelize = require('sequelize')

const usuarioModels = database.define('usuarios', {
    idUsuario: {
        type : Sequelize.INTEGER(4),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nome : Sequelize.STRING(50),
    ra : Sequelize.STRING(30),
    email : Sequelize.STRING(60),
    senha : Sequelize.STRING(100),
    codigo : Sequelize.INTEGER
});

database.sync();

module.exports = usuarioModels;