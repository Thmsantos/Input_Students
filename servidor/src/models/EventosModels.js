const database = require('../config/index');
const Sequelize = require('sequelize');


const EventosModels = database.define('Eventos', {
    idEventos
 : {
        type : Sequelize.INTEGER(4),
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    descricao : Sequelize.TEXT,
});

database.sync();

module.exports = EventosModels;