const mongoose = require("mongoose");

//atenção! os 'types': começam com letra maiúscula
const autorSchema = new mongoose.Schema({
  id: { type: String },
  nome: { type: String, require: true }, //atenção! os 'types': começam com letra maiúscula
  nacionalidade: { type: String, require: true },
  idade: { type: Number },
});

const autor = mongoose.model("autores", autorSchema);
module.exports = autor;
