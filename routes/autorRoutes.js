const express = require('express')

const routes = express.Router()
//nao colocar "; porque pode encerrar o codigo.

routes
    .get('/autores', AutorController.findAll)

//module.exports = routes