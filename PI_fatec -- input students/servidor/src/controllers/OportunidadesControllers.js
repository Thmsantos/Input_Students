const database = require('../config/index')
const tabela = require('../models/OportunidadesModels')

class OportunidadesControllers {

    static async VerTodos(req, res){
        await database.sync();
        let data = await tabela.findAll({raw : true});
        let array = Object.keys(data)
        let registros = Object.values(data)
        for(let i = 0; i < array.length; i++){
            console.log(registros[i].descricao)
        }
        res.status(200).json(registros)

        
    }

    static async Adicionar(req, res){
        await database.sync();
        const resultadoCreate = await tabela.create(req.body)
        console.log(resultadoCreate);
        res.send('foi')
    }

    static async Atualizar(req, res){
        let id_d = req.params.id
        await database.sync();
        const resultadoUpdate = await tabela.update(req.body, {where: {idOportunidades : id_d} })
        console.log(resultadoUpdate)
        res.send('foi')
    }

    
    static async Excluir(req, res){
        let id_d = req.params.id
        await database.sync();
        const resDelete = await tabela.destroy({where: {idOportunidades : id_d}})
        res.send('excluido')
    }
}

module.exports = OportunidadesControllers;