const express = require('express');
const routes = require('./routes/index')
// create new express app and save it as "app"
const app = express();

// const routes = require('./routes/livroRoutes')

const db = require('./config/db')
// const livros = require('./models/livro')

db.on('error', console.log.bind(console, 'Erro ao conectar o banco!'))

db.once('open', () => {
  console.log('Conexao realizada com sucesso!')
})
// server configuration
const PORT = 5000;


routes(app)

// create a route for the app
app.get('/', (req, res) => {
  res.send('Servidor Subiu');

});

//mongoosse queries Ex: '.find'
// app.get('/livros', (req, res) => {
//   livros.find((error, livros) => {
//     res.status(200).json(livros)
//   })

// })


// make the server listen to requests
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});