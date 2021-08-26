import React from "react";
import { Link } from "react-router-dom";
import "./pageNotFound.scss";

export const PageNotFound = () => {
  return (
    <div className="page-not-found">
      <h1>Error : 404</h1>
      <h1>Page Not Found</h1>
      <p>The requested URL does not exist. Please go back to the home page</p>
      <Link to="/">
        <button>Go back to Home</button>{" "}
      </Link>
    </div>
  );
};
