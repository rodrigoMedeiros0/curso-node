const express = require("express");
const app = express();
const handlebars = require("express-handlebars");

//Config
//template engine
app.engine("handlebars", handlebars.engine({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Conexão com o banco de daos
const Sequelize = require("sequelize");
const sequelize = new Sequelize("test", "root", "servidor123.", {
  host: "localhost",
  dialect: "mysql",
});

//Rotas
 app.get('/cad', function(req, res) {
    res.render('formulario')
 });

app.listen(8081, function () {
  console.log("Sevidor rodando na url http://localhost:8081");
});

