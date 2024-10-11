import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div className="container secondary-color">
        <h1 className="display-4">Eliminate the guesswork.</h1>
        <p className="lead">
          Create an accurate quote for your customer's remodel, repair, or room addition.
        </p>
        <hr className="my-4" />
        <Link
          to="/quotes/new"
          className="btn btn-lg custom-button"
          role="button"
        >
          Get Started
        </Link>
      </div>
    </div>
  </div>
);
