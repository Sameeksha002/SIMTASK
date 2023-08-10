import axios from "axios";
import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Container,
} from "reactstrap";
import base_url from "./api/springapi";
import { toast } from "react-toastify";
import { Updatecourse } from "./Updatecourse";

export const Course = ({ course, onUpdate }) => {
  const [showUpdateForm, setShowUpdateForm] = useState(false);

  // delete course function
  const deletecourse = (id) => {
    axios.delete(`${base_url}/courses/${id}`).then(
      (response) => {
        console.log(response);
        toast.success("Deleted successfully");
        onUpdate();
      },
      (error) => {
        console.log(error);
        toast.error("Something went wrong");
      }
    );
  };

  const toggleUpdateForm = () => {
    setShowUpdateForm(!showUpdateForm);
  };

  const handleUpdateFormSubmit = () => {
    onUpdate();
    // Call the function to update the course with the updatedCourse data
    // Assuming you have an `updateCourse` function to handle updating the course
    // You can pass the updatedCourse data to the backend here
    // updateCourse(updatedCourse);

    // Hide the update form after submission

    setShowUpdateForm(false);
  };

  return (
    <Card className="text-center bg-slate-100 m-4">
      <CardBody>
        <CardTitle className="font-bold text-lg">
          {course.courseTitle}
        </CardTitle>
        <CardText className="text-base">{course.courseDescription}</CardText>
        <Container className="space-x-3">
          <Button
            color="danger"
            onClick={() => {
              deletecourse(course.courseId);
            }}
          >
            Delete
          </Button>
          <Button color="success" onClick={toggleUpdateForm}>
            Update
          </Button>
        </Container>
        {showUpdateForm && (
          <Updatecourse course={course} onUpdateChange={handleUpdateFormSubmit} />
        )}
      </CardBody>
    </Card>
  );
};
