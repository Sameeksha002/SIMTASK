import React, { useEffect } from "react";
import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  jumbotron,
} from "reactstrap";

const Home = () => {
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <>
      <Card>
        <img
          alt="Sample"
          src="https://filmdaily.co/wp-content/uploads/2020/05/online-courses-lede.jpg"
          width={400}
        />
        <CardBody className="text-justify">
          <CardTitle className="font-bold text-4xl">CourseStarter</CardTitle>
          <CardSubtitle className="font-medium text-xl m-2">
            Discover the Path to Knowledge and Success
          </CardSubtitle>
          <CardText className="text-base m-2">
            Are you ready to embark on a transformative learning journey? Look
            no further! CourseStarter is an immersive and engaging online
            learning experience designed to equip you with the skills and
            knowledge you need to excel in your field.
          </CardText>
        </CardBody>
      </Card>
    </>
  );
};

export default Home;
