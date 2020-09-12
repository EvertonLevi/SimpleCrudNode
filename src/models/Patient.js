const mongoose = require('mongoose')

const PatientSchema = new mongoose.Schema({
	id: String,
	name: String,
	cpf: String
})

module.exports = mongoose.model('Patient', PatientSchema)