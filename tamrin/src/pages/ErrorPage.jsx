import React from "react";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="section error-page">
      <div className="error-container">
        <h1 className="section-title">ops! its a dead end</h1>
        <Link to={"/"}>
          <button className="btn - btn-primary">back home</button>
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
