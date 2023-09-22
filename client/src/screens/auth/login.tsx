import { useState } from "react";
import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
} from "@mantine/core";
import { useAuth } from "../../providers/authProvider";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState({ input: "", error_message: "" });
  const [password, setPassword] = useState({ input: "", error_message: "" });
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (!email.input.includes("@")) {
      setEmail({ ...email, error_message: "Invalid email" });
    }
    if (password.input.length < 3) {
      setPassword({
        ...password,
        error_message: "Password must be at least 3 characters long",
      });
    }
    if (!email.input.includes("@") || password.input.length < 3) return;

    const response = await fetch("http://localhost:8000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email.input,
        password: password.input,
      }),
    });

    const data = await response.json();
    if (data === "Invalid credentials") {
      setPassword({ ...password, error_message: "Invalid credentials" });
    } else if (data === "User does not exist") {
      setEmail({ ...email, error_message: "User does not exist" });
    } else {
      login(data.token);
      navigate("/");
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail({ input: e.target.value, error_message: "" });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword({ input: e.target.value, error_message: "" });
  };

  return (
    <Container size={420} my={40}>
      <Title ta="center">Welcome back!</Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Do not have an account yet?{" "}
        <Anchor size="sm" component="button">
          <Link to="/register">Create account</Link>
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput
          label="Email"
          placeholder="you@mantine.dev"
          required
          onChange={handleEmailChange}
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          required
          mt="md"
          onChange={handlePasswordChange}
        />
        <Group justify="space-between" mt="lg">
          <Checkbox label="Remember me" />
          <Anchor component="button" size="sm">
            Forgot password?
          </Anchor>
        </Group>
        <Button fullWidth mt="xl" onClick={handleSubmit}>
          Sign in
        </Button>
      </Paper>
    </Container>
  );
}
