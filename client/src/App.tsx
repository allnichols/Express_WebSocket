import { useState, useEffect } from 'react';
import {Container, Button, Input, Flex, Text, Space, ScrollArea, Box}  from '@mantine/core';
import './App.css'

function App() {
  const [messages, setMessages] = useState<{user:string; message:string; id:number}[]>([])
  const [userMessage, setUserMessage] = useState<string>('');
  const [socket, setSocket] = useState<WebSocket | null>(null);


  const handleSend = () => {
    if (!socket) return;
    console.log(userMessage)
    socket.send(userMessage);
    setMessages((prev) => [...prev, {user: 'You', message: userMessage, id: Math.random()}])
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
      const data = JSON.parse(e.data);
      setMessages((prev) => [...prev, data])
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
      <ScrollArea h={500}>
        <Box>
        {messages.map((message, index) => {
          return (
            <Flex justify="flex-start" align="center" direction="row" key={index}>
              <Text fz="md" >{message.user}:</Text>
              <Space w="lg" />
              <Text fz="md">{message.message}</Text>
            </Flex>
          )
        })}
        </Box>
      </ScrollArea>
       <Input placeholder="Your message" onChange={handleInput} />
       <Button onClick={handleSend}>Send</Button>
    </Container>
  )
}

export default App
