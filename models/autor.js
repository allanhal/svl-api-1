const mongoose = require('mongoose');
const autorSchema = new mongoose.Schema({
    id: { type: String },
    nome: { type: String, require: true },
    nacionalidade: { type: String, require: true },
    idade: { type: number }

})

const autor = mongoose.model('autores', autorSchema);
module.exports = autor;