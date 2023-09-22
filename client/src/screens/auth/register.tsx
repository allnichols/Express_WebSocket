import { useContext, useState } from "react";
import {
  TextInput,
  PasswordInput,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Button,
} from "@mantine/core";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/authProvider";

export default function Register() {
  const [email, setEmail] = useState({ input: "", error_message: "" });
  const [password, setPassword] = useState({ input: "", error_message: "" });
  const [name, setName] = useState({ input: "", error_message: "" });
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (name.input.length < 3) {
      setName({
        ...name,
        error_message: "Name must be at least 3 characters long",
      });
    }
    if (password.input.length < 3) {
      setPassword({
        ...password,
        error_message: "Password must be at least 3 characters long",
      });
    }
    if (!email.input.includes("@")) {
      setEmail({ ...email, error_message: "Invalid email" });
    }

    if (
      !email.input.includes("@") ||
      password.input.length < 3 ||
      name.input.length < 3
    )
      return;

    const response = await fetch("http://localhost:8000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: email.input,
        password: password.input,
        name: name.input,
      }),
    });

    const data = await response.json();
    if (data === "User already exists") {
      setEmail({ ...email, error_message: "Email already exists" });
    }
    if (data.token) {
      login(data.token);
      navigate("/");
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail({ input: e.currentTarget.value, error_message: "" });
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword({ input: e.currentTarget.value, error_message: "" });
  };

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName({ input: e.currentTarget.value, error_message: "" });
  };

  return (
    <Container size={420} my={40}>
      <Title ta="center">Welcome!</Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Already have an account?{" "}
        <Anchor size="sm" component="button">
          <Link to="/login">Login</Link>
        </Anchor>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <TextInput
          label="Email"
          placeholder="you@mantine.dev"
          error={email.error_message}
          required
          onChange={handleEmailChange}
        />
        <TextInput
          label="Name"
          placeholder="John Doe"
          error={name.error_message}
          required
          mt="md"
          onChange={handleNameChange}
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          error={password.error_message}
          required
          mt="md"
          onChange={handlePasswordChange}
        />
        <Button
          onClick={handleSubmit}
          fullWidth
          mt="xl"
          disabled={!email.input || !password.input || !name.input}
        >
          Sign up
        </Button>
      </Paper>
    </Container>
  );
}
