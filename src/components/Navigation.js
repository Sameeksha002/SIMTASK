import React from "react";
import { Link } from "react-router-dom";
import { ListGroup} from "reactstrap";

const Navigation = () => {
  return (
    <>
      <ListGroup>
        <Link
          className="list-group-item list-group-item-action"
          tag="a"
          to="/"
          action
        >
          Home
        </Link>
        <Link
          className="list-group-item list-group-item-action"
          tag="a"
          to="/viewCourse"
          action
        >
          View Course
        </Link>
        <Link
          className="list-group-item list-group-item-action"
          tag="a"
          to="/addcourse"
          action
        >
          Add Course
        </Link>
      </ListGroup>
    </>
  );
};

export default Navigation;
