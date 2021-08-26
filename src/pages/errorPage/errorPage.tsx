import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getInProgress } from "../../redux/weather/selectors";
import "./errorPage.scss";

export const ErrorPage: React.FC = () => {
  const isLoading = useSelector(getInProgress);
  return (
    <div>
      {isLoading === false && (
        <div className="error-container">
          <h1>Something is not right.</h1>
          <p>
            Please, Try again later. If the error persists contact
            <a href="mailto:prakash@gmail.com">prakash@gmail.com</a>
          </p>
          <Link to="/">
            <button>Go back to Home</button>{" "}
          </Link>
        </div>
      )}
    </div>
  );
};
