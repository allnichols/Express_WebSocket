import { useEffect } from 'react';
import {
  TextInput,
  PasswordInput,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Button,
} from '@mantine/core';
import { Link } from 'react-router-dom';

export default function Register() {

  useEffect(() => {
    console.log('register');
  }, []);

  return (
    <Container size={420} my={40}>
      <Title ta="center">
        Welcome!
      </Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
            Already have an account?{' '}
        <Anchor size="sm" component="button">
            <Link to="/login">Login</Link>
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput label="Email" placeholder="you@mantine.dev" required />
        <PasswordInput label="Password" placeholder="Your password" required mt="md" />
        <Button fullWidth mt="xl">
          Sign up
        </Button>
      </Paper>
    </Container>
  )
}