const mongoose = require('mongoose');

//atenção! os 'types': começam com letra maiúscula
const livroSchema = new mongoose.Schema({ 
    id: { type: String },
    title: { type: String, required: true },
    //alteramos...autor: {type: String, required: true},
    autor: {type: mongoose.Schema.Types.ObjectId, ref: 'autores', required: true},
    editora: { type: String, required: true },
    numeroPaginas: { type: Number },
    favorite: { type: Boolean}


})

const livros = mongoose.model('livros', livroSchema);
module.exports = livros;