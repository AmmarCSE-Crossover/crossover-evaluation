import io from 'socket.io'

let ioServer
export function initSocketIO(appServer){
    ioServer = io.listen(appServer)

    /*ioServer.on('connection', function(socket){
      socket.on('donor added', function(msg){
        ioServer.emit('pin added', msg)
      })
    })*/
}

export function notifyAddDonor(donor){
console.log('hello')
    ioServer.emit('donor added', donor)
}
