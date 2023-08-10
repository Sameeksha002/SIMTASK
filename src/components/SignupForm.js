import React, { useState } from "react";
import axios from "axios";
import {
  FormGroup,
  Form,
  Label,
  Input,
  Button,
  Card,
  CardBody,
  CardTitle,
  Container,
} from "reactstrap";
import { toast } from "react-toastify";
import base_url from "./api/springapi";

function SignupForm() {
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUserName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setUserEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setUserPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${base_url}/auth/signup`, {
        userName,
        userEmail,
        userPassword,
      });

      if (response.status === 200) {
        toast.success("Successful SignUp");
      } else {
        toast.error("Signup failed"); // Set error message for unsuccessful signup
      }
    } catch (error) {
      toast.error("Network error"); // Set error message for network error or signup failure
    }
  };

  return (
    <>
      <Card>
        <CardTitle className="text-center font-bold text-3xl m-3 bg-green-300 p-1.5 border">
          SignUp Form
        </CardTitle>
        <CardBody className="m-6">
          <Form onSubmit={handleSubmit}>
            <FormGroup>
              <Label For="username">Username</Label>
              <Input
                type="text"
                id="username"
                value={userName}
                onChange={handleUsernameChange}
              />
            </FormGroup>

            <FormGroup>
              <Label For="email">Email</Label>
              <Input
                type="email"
                id="email"
                value={userEmail}
                onChange={handleEmailChange}
              />
            </FormGroup>

            <FormGroup>
              <Label For="password">Password</Label>
              <Input
                type="password"
                id="password"
                value={userPassword}
                onChange={handlePasswordChange}
              />
            </FormGroup>
            <Container className=" text-center mt-4">
              <Button type="submit" color="success" className="px-3 py-2">
                Sign Up
              </Button>
            </Container>
          </Form>
        </CardBody>
      </Card>
    </>
  );
}

export default SignupForm;
