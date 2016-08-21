import http from 'http'
import io from 'socket.io'

let httpServer = http.Server

export function initSocketIO(app){
    httpServer = httpServer(app)
    let ioServer = io(httpServer)

    ioServer.on('connection', function(socket){
      socket.on('chat message', function(msg){
        ioServer.emit('chat message', msg)
      })
    })
}
