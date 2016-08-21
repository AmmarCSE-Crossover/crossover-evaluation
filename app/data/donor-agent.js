import {Donor} from './donor-model'

//curry the callback variable since all calls to mongoose functions expect a (err, todo) => {...} to occur
let callbackCurry = callback =>
    (err, donor) => callback(err, donor)

export function add(donor, callback){
    let newDonor = new Donor(donor)
    newDonor.save(callback)
}

export function find(donor, callback){
    Donor.findOne(donor, callback)
}
