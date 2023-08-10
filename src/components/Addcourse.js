import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Container,
  Form,
  FormGroup,
  Input,
  Label,
} from "reactstrap";
import base_url from "./api/springapi";
import { toast } from "react-toastify";

export const Addcourse = () => {
  useEffect(() => {
    document.title = "Addcourse";
  }, []);

  const [courseId, setCourseId] = useState("");
  const [courseTitle, setCourseTitle] = useState("");
  const [courseDescription, setCourseDescription] = useState("");

  //handle form
  function handleform(e) {
    e.preventDefault();
    postdatatoserver({ courseId, courseTitle, courseDescription });
    console.log(courseId, courseTitle, courseDescription);
    // Reset the form state after submitting
    setCourseId("");
    setCourseTitle("");
    setCourseDescription("");
  }

  //submit to form
  const postdatatoserver = (data) => {
    axios.post(`${base_url}/courses`, data).then(
      (response) => {
        console.log(response);
        toast.success("Added succesfully");
      },
      (error) => {
        console.log(error);
        toast.error("Something went wrong");
      }
    );
  };

  return (
    <>
      <CardHeader className="text-center text-3xl m-2 font-bold">
        ADD COURSE
      </CardHeader>
      <Card className="m-2 p-3 border-3" color="primary" outline>
        <CardBody>
          <Form onSubmit={handleform}>
            <FormGroup>
              <Label
                for="courseid"
                className="text-xl text-blue-700 font-semibold"
              >
                Course Id
              </Label>
              <Input
                type="number"
                name="courseid"
                placeholder="Course Id"
                id="courseid"
                value={courseId}
                onChange={(e) => {
                  setCourseId(e.target.value);
                }}
              />
            </FormGroup>

            <FormGroup>
              <Label
                for="cousetitle"
                className="text-xl text-blue-700 font-semibold"
              >
                Course Title
              </Label>
              <Input
                type="text"
                name="coursetitle"
                id="coursetitle"
                placeholder="Enter Course Name"
                value={courseTitle}
                onChange={(e) => {
                  setCourseTitle(e.target.value);
                }}
              />
            </FormGroup>

            <FormGroup>
              <Label
                for="coursedescription"
                className="text-xl text-blue-700 font-semibold"
              >
                Course Description
              </Label>
              <Input
                type="textarea"
                rows="4"
                name="coursedescription"
                id="coursedescription"
                placeholder="Provide Course Description"
                value={courseDescription}
                onChange={(e) => {
                  setCourseDescription(e.target.value);
                }}
              />
            </FormGroup>
            <Container className=" flex justify-between mt-4">
              <Button type="submit" color="success">
                Add Course
              </Button>
              <Button type="reset" color="warning">
                Clear
              </Button>
            </Container>
          </Form>
        </CardBody>
      </Card>
    </>
  );
};
