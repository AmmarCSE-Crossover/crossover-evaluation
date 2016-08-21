import io from 'socket.io'

export function initSocketIO(appServer){
    let ioServer = io.listen(appServer)

    ioServer.on('connection', function(socket){
      socket.on('chat message', function(msg){
        ioServer.emit('chat message', msg)
      })
    })
}
