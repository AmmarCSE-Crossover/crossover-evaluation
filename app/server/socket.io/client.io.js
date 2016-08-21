export function attachSocket(){
    let socket = io()
    socket.on('chat message', (msg) => {
        $('#messages').append($('<li>').text(msg))
    })
}
