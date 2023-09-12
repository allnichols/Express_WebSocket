// import { WebSocketServer } from 'ws';
// import http from 'http';
// import express from 'express';
// import cors from 'cors';

// const server = http.createServer();

// const ws = new WebSocketServer({ server });
// const PORT = 8000;

// server.listen(PORT, () => {
//     console.log(`ws is running on ${PORT}`);
// })


// function randomMessage(){
//     // array of objects user, message, id
//     const messages = [
//         {
//             user: 'John Doe',
//             message: 'wow',
//             id: 1
//         },
//         {
//             user: 'Sally Mae',
//             message: 'yoo!!!!',
//             id: 2
//         },
//         {
//             user: 'Jane Doe',
//             message: 'dude this is so cool',
//             id: 3
//         },
//     ]
    
//     const randomIndex = Math.floor(Math.random() * messages.length);
//     return messages[randomIndex];
// }

// ws.on('connection', function connection(ws){

//     const message = setInterval(() => {
//         ws.send(JSON.stringify(randomMessage()));
//     }, 3000);

//     ws.on('message', function incoming(message){
//         console.log('received: %s', message);
//     });

//     ws.on('close', function close(){
//         console.log('disconnected');
//         clearInterval(message);
//     })


// })

