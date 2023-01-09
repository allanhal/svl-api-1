//.. dois pontos para voltar para a raiz

const livros = require("./livro");

class LivroController {
  //'static' da segurança. variavel findAllBooks = metodo para pegar todos o livros
  static findAll = (req, res) => {
    livros
      .find()
      //acrescentamos .populate e .exec
      .populate("autores")
      .exec((error, livros) => {
        res.status(200).json(livros);
      });
  };

  static findById = (req, res) => {
    const id = req.params.id;

    livros.findById(id, (err, livros) => {
      //tratar o erro ou o sucesso baseado na funçao de
      //utilizando os parametros erro, livros
      if (err) {
        console.log("1");
        res.status(404).send({
          message: "Livro nao encontrado",
          error: err.message,
        });
      } else {
        console.log("2", livros);
        res.status(200).json(livros);
      }
    });
  };

  static createBook = (req, res) => {
    let livro = new livros(req.body);

    livro.save((error) => {
      if (error) {
        res.status(500).send({
          message: "Erro ao salvar o livro!",
          error: error.message,
        });
      } else {
        res.status(201).send(livro.toJSON(livro));
      }
    });
  };

  static deleteBook = (req, res) => {
    const id = req.params.id;
    livros.findByIdAndDelete(id, (error) => {
      if (error) {
        res.status(404).send({
          message: "Não foi possível deletar o livro",
          error: error.message,
        });
      } else {
        res.status(200).send({ message: "O livro foi deletado!" });
      }
    });
  };

  static updateBook = (req, res) => {
    let id = req.params.id;
    livros.findByIdAndUpdate(id, { $set: req.body }, (error) => {
      if (error) {
        res.status(404).send({
          message: "Não foi possível atualizar o livro",
          error: error.message,
        });
      } else {
        res.status(200).send({ message: "O livro foi atualizado!" });
      }
    });
  };
}

module.exports = LivroController;
