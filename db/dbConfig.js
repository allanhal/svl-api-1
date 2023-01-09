const mongoose = require("mongoose");

// com a impotação do modulo externo do mongoose, podemos chamar a partir da variavel mongoose, ometodo connect()
//que recebe como parametro a string de conexao do banco, neste caso, o mongo Atlas.
// acrescentar senha do atlas no local de <passaword>. acrescentar /node_mongo (nome do database)
//ir no database (atlas) clicar em database e connect.
//clicar em mongoDB drivers connect your application to your cluster. copiar a string
mongoose.connect(
  "mongodb+srv://georgebarreira:01040813@cluster0.9ms6wtq.mongodb.net/svl"
);

// a variavel db recebe a conexao do banco e vamos exporta-la
let db = mongoose.connection;

// exporta a conexao com o mongo (Atlas ou local, dependendo da string de conexao)
module.exports = db;
