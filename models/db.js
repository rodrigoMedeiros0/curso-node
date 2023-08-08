const Sequelize = require("sequelize");

//Conexão com o banco de daos
const sequelize = new Sequelize("postapp", "root", "servidor123.", {
    host: "localhost",
    dialect: "mysql",
  });

  module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
  }