const express = require('express');
const bodyParser = require('body-parser');
//const controlador = require('../controller/authController')
const app = express(); //criando app

app.use(bodyParser.json());//utilizar json - entenda requisicao
app.use(bodyParser.urlencoded({ extended: false}));


//app.use(controlador);
require('./controller/authController')(app);// app objetivo é o express - aqui eu repasso ele para o

app.listen(3000);