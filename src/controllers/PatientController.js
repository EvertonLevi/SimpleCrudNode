const uuid = require('uuid/v1')
const axios = require('axios')

const Patient = require('../models/Patient')

module.exports = {

	async getPatient(req, res) {
		const id = req.params.id
		const patient = await Patient.find({ id: id })
		return res.json(patient)
	},

	async getPatients(req, res) {
		const patients = await Patient.find()
		return res.json(patients)
	},

	async deletePatient(req, res) {
		const id = req.params.id
		const patient = await Patient.deleteOne({ id: id })
		return res.json(patient)
	},

	async updatePatient(req, res) {
		const id = req.params.id
		const {
			name,
			cpf
		} = req.body
		const patient = await Patient.updateOne({ id: id },
			{
				name: name,
				cpf: cpf
			})
		return res.json(patient)
	},

	async createPatient(req, res) {
		console.log(req.body)
		const {
			name,
			cpf
		} = req.body

		let patient = await Patient.findOne({ cpf })
		if (!patient) {
			patient = await Patient.create({
				name,
				cpf,
				id: uuid()
			})
		}
		return res.json(patient)
	}
}