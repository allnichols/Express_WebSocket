import { useState, useEffect } from 'react';
import {Container, Button, Input } from '@mantine/core';
import './App.css'

function App() {
  const [messages, setMessages] = useState<string[]>([])
  const [userMessage, setUserMessage] = useState<string>('');
  const [socket, setSocket] = useState<WebSocket | null>(null);


  const handleSend = () => {
    console.log(socket);
    if (!socket) return;
    console.log(userMessage)
    socket.send(userMessage);
    setUserMessage('');
  }

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserMessage(e.target.value);
  }

  useEffect(() => {
    const ws = new WebSocket('ws://localhost:8000');
    setSocket(ws);

    ws.onopen = () => {
      console.log('connected');
    }

    ws.onmessage = (e) => {
      console.log(e.data);
      // setMessages((prev) => [...prev, e.data])
    }

    ws.onclose = () => {
      console.log('disconnected');
    }

    return () => {
      ws.close()
    }

  }, [])


  return (
    <Container>
       <Input placeholder="Your message" onChange={handleInput} />
       <Button onClick={handleSend}>Send</Button>
    </Container>
  )
}

export default App
