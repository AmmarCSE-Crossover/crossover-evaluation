import io from 'socket.io'

let ioServer
export function initSocketIO(appServer){
    ioServer = io.listen(appServer)
}

export function notifyAddDonor(donor){
    ioServer.emit('donor added', donor)
}
