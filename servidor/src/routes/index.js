const express = require('express');
const Eventos = require('../controllers/EventosControllers')
const Oportunidades = require('../controllers/OportunidadesControllers')
const Secretaria = require('../controllers/SecretariaControllers')
const Projetos = require('../controllers/ProjetoControllers')
const perfil = require('../controllers/PerfilControllers')
const login = require("../controllers/loginControllers")

const router = express.Router();

router
    //eventos
    .get('/eventos', Eventos.VerTodos)
    .post('/addEventos', Eventos.Adicionar)
    .put('/updEventos/:id', Eventos.Atualizar)
    .delete('/delEve/:id', Eventos.Excluir)

    //oportunidades
    .get('/oportunidades', Oportunidades.VerTodos)
    .post('/addOportunidades', Oportunidades.Adicionar)
    .put('/updOportunidades/:id', Oportunidades.Atualizar)
    .delete('/delOport/:id', Oportunidades.Excluir)

    //secretaria
    .get('/secretaria', Secretaria.VerTodos)
    .post('/addSecretaria', Secretaria.Adicionar)
    .put('/updSecretaria/:id', Secretaria.Atualizar)
    .delete('/delSC/:id', Secretaria.Excluir)
    

    //projetos
    .get('/verProjetos', Projetos.VerTodos)
    .get('/projPerfil', Projetos.verProjPerfil)
    .post('/addProjeto', Projetos.Adicionar)

    //perfil
    .get('/VerPerfil', perfil.VerUser)
    .put('/attUser', perfil.UpdateUser)
   /*  .post('/addPerfil', perfil.Adicionar)
 */
    //login
    .post('/cadastrar', login.Cadastrar)
    .post('/logar', login.Login)
    .get('/deslogar', login.deslogar)

module.exports = router
