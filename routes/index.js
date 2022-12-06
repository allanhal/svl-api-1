//no arquivo index contem todos os imports para melhor organizaçao. Boa prarica!
const express = require('express')

const livros = require('./livroRoutes')

const routes = (app) => {
    app.use(
        express.urlencoded({
          extended: true
        })
      )
      
      app.use(
      //dentro do 'livros' contem as rotas do meu livro
        express.json(), livros)


}
module.exports = routes