import React, { useState } from "react";
import axios from "axios";
import base_url from "./api/springapi";
import { toast } from "react-toastify";
import {
  Button,
  Container,
  FormGroup,
  Input,
  Label,
  Form,
  Card,
  CardTitle,
  CardBody,
} from "reactstrap";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${base_url}/auth/login`, {
        username,
        password,
      });

      if (response.status === 200) {
        const token = response.data.jwtToken; // Assuming the token is returned as 'token'
        // Store the token in local storage or a secure state management solution
        localStorage.setItem("token", token);
        toast.success("Successful Login");
      } else {
        toast.error("Invalid credentials"); // Set error message for unsuccessful login
      }
    } catch (error) {
      toast.error("Network error"); // Set error message for network error or login failure
    }
  };

  return (
    <Card>
      <CardTitle className="text-center font-bold text-3xl m-3 bg-cyan-300 p-1.5 border">
        Login Form
      </CardTitle>
      <CardBody className="m-6">
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label htmlFor="username">Username</Label>
            <Input
              type="text"
              id="username"
              value={username}
              onChange={handleUsernameChange}
            />
          </FormGroup>

          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </FormGroup>

          <Container className=" text-center mt-4">
            <Button type="submit" color="info" className="px-3 py-2">
              Login
            </Button>
          </Container>
        </Form>
      </CardBody>
    </Card>
  );
}

export default LoginForm;
