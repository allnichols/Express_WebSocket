import { WebSocketServer } from 'ws';
import http from 'http';
import UUID from 'uuid';

const server = http.createServer();


const ws = new WebSocketServer({ server });
const PORT = 8000;

server.listen(PORT, () => {
    console.log(`ws is running on ${PORT}`);
})

const clients = {};

ws.on('connection', function connection(ws){
    // Generate a unique code for every user
    const userId = UUID.v4();
    console.log(`recieved a connection`);

    // Store unique code in clients object
    clients[userId] = ws;
    console.log(`${userId} connected`);

})