const database = require('../config/index')
const tabela = require('../models/perfilModels')
const tabelaUsuario = require('../models/usuarioModels')


class PerfilControllers {

    static async VerUser(req, res){
        await database.sync();
        let Usuario = await tabela.findAll({where : {status : 1}})
        res.status(200).json(Usuario)
    }

    static async UpdateUser(req, res){
        await database.sync();
        let status = await tabela.findAll({where: {status : 1}})
        let id = status[0].idPerfil
        console.log(req.body)
        const resUpdate = await tabela.update(req.body, {where: {idPerfil : id}})
        console.log(resUpdate)
        res.status(200).json(req.body)
    }

}

module.exports = PerfilControllers;