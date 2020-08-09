const express = require('express');

const OngController = require('./controllers/OngController')
const OngIncidents  = require('./controllers/OngIncidents')
const ProfilesController  = require('./controllers/ProfileController')
const SessionController  = require('./controllers/SessionController')


const routes = express.Router();

//ongs
routes.get('/ongs', OngController.index)
routes.post('/users', OngController.create)


//incidents

//login
routes.post('/sessions',SessionController.create)

//lista todos os casos
routes.get('/incidents',OngIncidents.index)

// cria um caso
routes.post('/incidents', OngIncidents.create)

// Deleta um caso
routes.delete('/incidents/:id', OngIncidents.delete)

//Mostra todos os casos de um profile
routes.get('/incidents/profile', ProfilesController.index)

module.exports = routes