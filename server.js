const express = require('express');

// create new express app and save it as "app"
const app = express();

const db = require('./config/db')

const livros = require('./models/livro')

db.on('error', console.log.bind(console, 'Erro ao conectar o banco!'))

db.once('open', () => {

    console.log('Conexao realizada com sucesso!')

})
// server configuration
const PORT = 5000;

// create a route for the app
app.get('/', (req, res) => {
  res.send('Servidor Subiu');

});
app.get('/livro', (req, res) => {
  livros.find((error, livros) => {
    res.status(200).json(livros)
  })

  })


// make the server listen to requests
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});