import React from "react";
import { Link } from "react-router-dom";

const Heading = () => {
  return (
    <>
      <div className="bg-sky-100 text-center">
        <div className="text-4xl text-center  pt-6  text-cyan-900">
          Welcome to CourseStarter
        </div>
        <jumbotron>
          <p className="text-sm my-2">
            At CourseStarter, we are committed to providing high-quality and
            enriching learning experiences to our students. Our courses are
            carefully designed and taught by experts in their respective fields.
          </p>
          <div className="bg-emerald-500 text-xl p-1 text-white text-right">
            <Link
              className="list-group-item list-group-item-action p-1 font-bold"
              tag="a"
              to="/LoginSingUp"
              action
            >
              Login/SingUp
            </Link>
          </div>
        </jumbotron>
      </div>
    </>
  );
};

export default Heading;
