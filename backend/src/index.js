const express = require('express')
const routes = require('./routes')
const cors = require('cors')
const app = express()

app.use(express.json());
app.use(cors())
app.use(routes)

/* Rota / Recursos */

// GET Conseguir uma informção no backend
// POST criar uma informação no backend

// tipos de parãmetro

// Query params: Parametros utilizados para identificar recursos
// request Body: Corpo da requisição, utilizado para criar ou alterar recursos

//SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Server
// NOSQL: MongoDB, CouchDB, etc



// ENTIDADES DA APP: É TUDO AQUILO QUE VAI SER SALVO NO DB

// 1 - ong , 
// 2 - casos "incident"


//MIGRATIONS KNEX - history the all work tipo um controle de versão.

//FUNCIONALIDADES

// Login de ONG
// Lougout de ONG
// Cadastro de ONG
// Cadastro de novo ONG
// Deletar ONG
// Listar casos especificos de uma ONG
// Listar todos os casos
// Entrar em contato com a ONG

app.listen(3333)