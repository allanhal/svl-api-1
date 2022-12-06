const express = require('express')
const LivroController = require('../controllers/LivroController')

const routes = express.Router()

routes.get('/livros', LivroController.findAllBooks)

module.exports = routes