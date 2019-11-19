const express = require ('express');
 
const User = require('../Models/User');

const router = express.Router();

router.post('/register', async (req,res) => {  // ROTA DE REGISTRO, VER 'ASYNC'. PAA USUARIO
    try {
        const user = await User.create(req.body); // REQ.BODY PARAMETROS QUE O  USUARIO CRIA E O USER.CREATE REPASSA PARA USER.CREATE

        return res.send({ user }) // RETORNO DOS DADOS
    } catch (err){// CONTROLE DE ERRO
        return res.status(400).send({ error: ' DEU RUIM '});
    }
});

module.exports = app => { app.use('/auth', router)}; // passo para o app a rota 