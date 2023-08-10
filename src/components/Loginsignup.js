import React from "react";
import { Col, Container, Row } from "reactstrap";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

export const Loginsignup = () => {
  return (
    <>
      <Container>
        <Row>
          <Col md={4}></Col>
          <Col md={8}>
            <SignupForm />
            <div className="m-11"></div>
            <LoginForm />
          </Col>
        </Row>
      </Container>
    </>
  );
};
