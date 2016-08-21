import mongoose from 'mongoose'
let Schema = mongoose.Schema

const DonorSchema = new Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	number: { type: String, required: true },
	email: { type: String, required: true },
	address: { type: String, required: true },
	latitude: { type: Number, required: true },
	longitude: { type: Number, required: true },
	bloodGroup: { type: String, required: true },
	ip: { type: String, required: true }
})

export let Donor = mongoose.model('Donor', DonorSchema)

