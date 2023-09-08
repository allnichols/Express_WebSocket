import { createServer } from 'http'
import crypto from 'crypto';

const PORT = 3000
const SOCKET_KEY = '258EAFA5-E914-47DA-95CA-C5AB0DC85B11';

const server = createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' })
    res.end('Hello World\n')   
})
.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
});


server.on('upgrade', (req, socket, head) => {
    const {'sec-websocket-key': clientSocketKey } = req.headers;
    console.log(`${clientSocketKey} connected!`)
    const headers = prepareHandShake(clientSocketKey);
    

    socket.write(headers)
    socket.on('readable', () => onReadable(socket))
});

function onReadable(socket){
    
}




function prepareHandShake(id){
    const sha1 =  crypto.createHash('sha1');
    sha1.update(id + SOCKET_KEY)
    const headers = [
        'HTTP/1.1 101 Switching Protocols',
        'Upgrade: websocket',
        'Connection: Upgrade',
        `Sec-WebSocket-Accept: ${sha1.digest('base64')}`,
        ''
    ].map(line => line.concat('\r\n')).join('')

  return headers
}


// error handling to keep the server running
[
    'uncaughtException',
    'unhandledRejection'
].forEach(event => 
    process.on(event, (err) => {
        console.error(`error: ${event}, msg: ${err.stack || err}`)
    })
);
