import React, { useEffect, useState } from "react";
import { Course } from "./Course";
import base_url from "./api/springapi";
import axios from "axios";
import { toast } from "react-toastify";

export const Allcourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    document.title = "Allcourses";
  }, []);

  //funtion to call server
  const getAllcourses = () => {
    axios.get(`${base_url}/courses`).then(
      (response) => {
        //sucess
        console.log(response.data);
        toast.success("courses has been loaded");
        setCourses(response.data);
      },
      (error) => {
        //failure for error
        console.log(error);
        toast.error("somethimg went wrong");
      }
    );
  };

  useEffect(() => {
    getAllcourses();
  }, []);

  return (
    <div>
      {courses.length > 0
        ? courses.map((item) => (
            <Course
              course={item}
              onUpdate={getAllcourses}
            />
          ))
        : "No Course Available"}
    </div>
  );
};
