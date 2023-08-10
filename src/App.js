import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Heading from "./components/Heading";
import { Allcourses } from "./components/Allcourses";
import { Container, Row, Col } from "reactstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Addcourse } from "./components/Addcourse";
import { ToastContainer } from "react-toastify";
import { Loginsignup } from "./components/Loginsignup";

function App() {
  return (
    <>
      <ToastContainer />
      <Router>
        <Heading />
        <Container className="m-4">
          <Row>
            <Col md={4}>
              <Navigation />
            </Col>
            <Col md={8}>
              <Routes>
                <Route path="/" Component={Home} exact />
                <Route path="/viewCourse" Component={Allcourses} exact />
                <Route path="/addCourse" Component={Addcourse} exact />
                <Route path="/LoginSingUp" Component={Loginsignup} exact />
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>
    </>
  );
}

export default App;
