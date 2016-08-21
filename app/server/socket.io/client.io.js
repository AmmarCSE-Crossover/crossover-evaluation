import {coordinatesToPin} from '../../view/map-provider/utils'

export function attachSocket(){
    let socket = io()
    socket.on('donor added', (donor) => {
        coordinatesToPin({longitude: donor.coordinates[1], latitude: donor.coordinates[0]})
    })
}
