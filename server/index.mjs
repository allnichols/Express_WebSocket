import { WebSocketServer } from 'ws';
import http from 'http';
import { v4 as uuidv4 } from 'uuid';

const server = http.createServer();

const ws = new WebSocketServer({ server });
const PORT = 8000;

server.listen(PORT, () => {
    console.log(`ws is running on ${PORT}`);
})


function randomMessage(){
    const messages = ['hello', 'hi', 'bye', 'goodbye', 'hola', 'adios', 'bonjour', 'au revoir', 'ciao', 'arrivederci', 'hallo', 'tschuss'];
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}

ws.on('connection', function connection(ws){

    const message = setInterval(() => {
        ws.send(randomMessage())
        console.log('sent message')
    }, 10000);

    ws.on('message', function incoming(message){
        console.log('received: %s', message);
    });

    ws.on('close', function close(){
        console.log('disconnected');
        clearInterval(message);
    })


})

