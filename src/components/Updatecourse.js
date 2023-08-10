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

export const Updatecourse = ({ course, onUpdateChange }) => {
  useEffect(() => {
    document.title = "Updatecourse";
  }, []);

  const [courseId, setCourseId] = useState("");
  const [courseTitle, setCourseTitle] = useState("");
  const [courseDescription, setCourseDescription] = useState("");

  useEffect(() => {
    setCourseId(course.courseId);
    setCourseTitle(course.courseTitle);
    setCourseDescription(course.courseDescription);
  }, [course]);

  // handle form
  function handleform(e) {
    e.preventDefault();
    const data = {
      courseId,
      courseTitle,
      courseDescription,
    };
    updatetoserver(data);
    console.log(data);
  }

  // update the course
  const updatetoserver = (data) => {
    axios.put(`${base_url}/courses`, data).then(
      (response) => {
        console.log(response);
        toast.success("Update successfully");
        onUpdateChange(); // Notify parent about the update
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
        UPDATE COURSE
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
                disabled
              />
            </FormGroup>

            <FormGroup>
              <Label
                for="coursetitle"
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
                Update Course
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
