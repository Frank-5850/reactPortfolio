import React from "react";
import resume from "../resources/Franco Resume 2021.pdf";

const Header = () => {
  return (
    <div className="bg-dark text-light">
      <div className="container">
        <div className="row">
          <h1 className="col-md-3">Franco Phan</h1>
          <div className="col-md-6 text-center">
            <h1>Portfolio</h1>
          </div>
          <div className="col-md-3">
            <a
              href="https://github.com/Frank-5850"
              target="_blank"
              rel="noreferrer"
              className="btn btn-dark text-light"
            >
              Github
            </a>

            <a
              href="https://www.linkedin.com/in/franco-phan-5b14b7144/"
              target="_blank"
              rel="noreferrer"
              className="btn btn-dark text-light "
            >
              Linked In
            </a>

            <a
              href={resume}
              target="_blank"
              rel="noreferrer"
              className="btn btn-dark text-light"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
