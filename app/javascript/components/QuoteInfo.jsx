import React from "react";
import { Link } from "react-router-dom";

export default () => (
  <div className="vw-100 vh-100 primary-color d-flex align-items-center justify-content-center">
    <div className="jumbotron jumbotron-fluid bg-transparent">
      <div className="container secondary-color">
        <h3 className="display-4">Create a quote</h3>
        
        <p className="lead">
          Enter some basic information about the project
        </p>
        <hr className="my-4" />
        <form>
          <label htmlFor="title">Enter an internal title for your project:</label>
          <input name="title" type="text" className="quote-input"></input>
          <hr className="my-4" />
          <button type="submit">Save</button>
        </form>
      </div>
    </div>
  </div>
);
