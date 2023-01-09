const express = require("express");
const AutorController = require("../controllers/autorController");

const routes = express.Router();
//nao colocar "; porque pode encerrar o codigo.

routes
  .get("/autores", AutorController.findAll)
  .get("/autor/:id", AutorController.findById)
  .post("/autor", AutorController.createBook)
  .delete("/autor/:id", AutorController.deleteBook)
  .put("/autor/:id", AutorController.updateBook);

module.exports = routes;
