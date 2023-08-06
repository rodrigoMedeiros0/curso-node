const Sequelize = require('sequelize');
const sequelize = new Sequelize('test', 'root', 'servidor123.', {
    host: 'localhost',
    dialect: 'mysql'
});

//Criando Model, string tem limite de caracter, já o text e ilimitado 
const Postagem = sequelize.define('postagens', {
    titulo: {
        type: Sequelize.STRING
    },
    conteudo: {
        type: Sequelize.TEXT
    }
});

Postagem.create({
    titulo: "Primeiro titulo",
    conteudo: "Conteudo do primeiro post"
})

const Usuario = sequelize.define('usuarios', {
    nome: {
        type: Sequelize.STRING
    },
    sobrenome: {
        type: Sequelize.STRING
    },
    idade: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

Usuario.create({
    nome: "Rodrigo",
    sobrenome: "Medeiros",
    idade: 29,
    email: "rodrigo@gmail.com"
})

// Postagem.sync({force: true})
// Usuario.sync({force: true})