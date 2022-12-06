//.. dois pontos para voltar para a raiz

const livros = require('../models/livro')

class LivroController {

    //'static' da segurança. variavel findAllBooks = metodo para pegar todos o livros
    static findAllBooks = (req, res) => {
        livros.find((error, livros) => {
            res.status(200).json(livros)
          })

    }
}
module.exports = LivroController