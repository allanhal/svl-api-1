const mongoose = require('mongoose');

//atenção! os 'types': começam com letra maiúscula
const livroSchema = new mongoose.Schema({
    id: { type: String },
    title: { type: String, required: true },
    autor: {type: String, required: true},
    editora: { type: String, required: true },
    numeroPaginas: { type: Number },
    favorite: { type: Boolean}


})

const livros = mongoose.model('livros', livroSchema);
module.exports = livros;