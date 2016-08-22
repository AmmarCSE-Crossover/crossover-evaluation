import mongoose from 'mongoose'
let Schema = mongoose.Schema

const DonorSchema = new Schema({
	firstName: { type: String, required: true },
	lastName: { type: String, required: true },
	number: { type: String, required: true },
	email: { type: String, required: true },
	address: { type: String, required: true },
    //index lat, long, and ip since they will be searched by extensively
    coordinates: { type: [Number], index: '2d' },
	ip: { type: String, required: true, index: true  },
	bloodGroup: { type: String, required: true },
	editToken: { type: String, required: true }
})

//DonorSchema.index({ ip: 1, latitude:
export let Donor = mongoose.model('Donor', DonorSchema)

