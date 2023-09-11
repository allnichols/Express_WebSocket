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
    // array of objects user, message, id
    const messages = [
        {
            user: 'John Doe',
            message: 'wow',
            id: uuidv4()
        },
        {
            user: 'Sally Mae',
            message: 'yoo!!!!',
            id: uuidv4()
        },
        {
            user: 'Jane Doe',
            message: 'dude this is so cool',
            id: uuidv4()
        },
    ]
    
    const randomIndex = Math.floor(Math.random() * messages.length);
    return messages[randomIndex];
}

ws.on('connection', function connection(ws){

    const message = setInterval(() => {
        ws.send(JSON.stringify(randomMessage()));
    }, 3000);

    ws.on('message', function incoming(message){
        console.log('received: %s', message);
    });

    ws.on('close', function close(){
        console.log('disconnected');
        clearInterval(message);
    })


})

