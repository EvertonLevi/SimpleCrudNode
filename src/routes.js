const { Router } = require('express')
const PatientController = require('./controllers/PatientController')

const routes = Router()

routes.get('/api/patients',
	PatientController.getPatients)

routes.get('/api/patients/:id',
	PatientController.getPatient)

routes.post('/api/patients',
	PatientController.createPatient)

routes.delete('/api/patients/:id',
	PatientController.deletePatient)

routes.put('/api/patients/:id',
	PatientController.updatePatient)

module.exports = routes