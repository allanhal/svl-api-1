const express = require("express");
const routes = require("./routes/index");
// create new express app and save it as "app"
const app = express();

const db = require("./config/db");

db.on("error", console.log.bind(console, "Erro ao conectar o banco!"));
db.once("open", () => {
  console.log("Conexao realizada com sucesso!");
});
// server configuration
const PORT = 10000;

routes(app);

// create a route for the app
app.get("/", (req, res) => {
  res.send("Servidor Subiu");
});

// make the server listen to requests
app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});
