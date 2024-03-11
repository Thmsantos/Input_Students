const database = require('../config/index');
const Sequelize = require('sequelize');


const perfilModels = database.define('perfil', {
    idPerfil : {
        type : Sequelize.INTEGER(4),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    Nome: Sequelize.STRING(150),
    Curso : Sequelize.STRING(100),
    descricaoUsuario : Sequelize.TEXT,
    status : Sequelize.INTEGER,
    linkPort : Sequelize.STRING(200),
    imgPerfil : Sequelize.STRING(200),
    imgCapa : Sequelize.STRING(200),
    qtdProjeto : Sequelize.INTEGER
});

database.sync();

module.exports = perfilModels;