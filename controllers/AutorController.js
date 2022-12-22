const autores = require('../models/autor')

class AutorController {

    //'static' da segurança. variavel findAllBooks = metodo para pegar todos o autores
    static findAll = (req, res) => {
        autores.find((error, autores) => {
            res.status(200).json(autores)
        })

    }

    static findById = (req, res) => {
        const id = req.params.id

        autores.findById(id, (err, autores) => {
            //tratar o erro ou o sucesso baseado na funçao de 
            //utilizando os parametros erro, autores
            if (err) {
                console.log('1')
                res.status(404).send({
                    message: 'Autor nao encontrado',
                    error: err.message
                })
            } else {
                console.log('2', autores)
                res.status(200).json(autores)
            }

        })
    }

    static createBook = (req, res) => {
        let Autor = new autores(req.body)

        Autor.save(error => {
            if (error) {
                res.status(500).send({
                    message: 'Erro ao salvar o Autor!',
                    error: error.message
                })

            } else {
                res.status(201).send(Autor.toJSON(Autor))
            }
        })


    }

    static deleteBook = (req, res) => {
        const id = req.params.id
        autores.findByIdAndDelete(id, (error) => {

            if (error) {
                res.status(404).send({
                    message: 'Não foi possível deletar o Autor',
                    error: error.message
                })


            } else {
                res.status(200).send({ message: 'O Autor foi deletado!' })
            }
            })
    }

    static updateBook = (req, res) => {
        let id = req.params.id
        autores.findByIdAndUpdate(id, { $set: req.body }, (error) => {
            if (error) {
                res.status(404).send({
                    message: 'Não foi possível atualizar o Autor',
                    error: error.message
                })
            } else {
                res.status(200).send({ message: 'O Autor foi atualizado!' })
            }
        })
    }
}

module.exports = AutorController