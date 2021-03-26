import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Fitness from "../photos/fitnesstracker.PNG";
import Notes from "../photos/Note Taker.PNG";
import Burger from "../photos/Burger App.PNG";
import Dog from "../photos/dogBlog.PNG";
import EmployeeTracker from "../videos/employeeTrackergif.gif";
import TeamGenerator from "../videos/teamGeneratorGif.gif";

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <div className="container">
          <div className="row">
            <h3 className="mt-5 border-bottom border-dark">About me</h3>
            <p>
              Born in 1991 Oakland, CA. During my highschool years I started
              working at IKEA as a sales associate and during my 12 years here I
              eventually got promoted to a Sales Planning specialist where i
              manage sales for 3 departments. In 2020 I decided to change career
              paths to learn web development as my fascination from it in
              highschool revitalized with a goal of becoming a full stack
              Developer. I am currently in a bootcamp program studying coding at
              UC Berkeley extension. I have developed knowledge to be able to
              create applications using the MERN stack. I also learned how to
              use CSS frameworks such as Bootstrap, Bulma, and Materailize. I
              learned how to use database programs such as MySql and MongoDB
              along with their node libraries; sequelize and mongoose
              respectively. I also learned many different node libraries;
              express, axios, passport, dotenv, and nodemailer just to name a
              few. My ambition is to use the tools I obtained through this
              course and create technology for those that have technological
              disadvantages and bridge the gap.
            </p>
          </div>

          <h3 className="mb-3 border-bottom border-dark">Projects</h3>
          <div className="row position-relative ">
            <div className="card col-md-3 mx-auto mb-3">
              <img src={Fitness} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">Fitness Tracker</h5>
                <p className="card-text">
                  This application was created to allow users to track workout
                  routines. The app is able to create a new workout or continue
                  a workout from your last session. This app was created with
                  the MERN stack with dependencies such as dotenv, express,
                  mongoose, and morgan.
                </p>
                <a
                  href=" https://workouttracker5850.herokuapp.com"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-dark text-light "
                >
                  Application
                </a>
                <a
                  className="right align"
                  href="https://github.com/Frank-5850/workoutTracker/tree/master/Develop"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-dark text-light "
                >
                  Github
                </a>
              </div>
            </div>

            <div className="card col-md-3 mx-auto mb-3">
              <img src={Notes} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title activator grey-text text-darken-4">
                  Note Taker
                </h5>
                <p>
                  This application was created for users to take notes. The
                  application allows the user to be able to create a new note,
                  read and update any note, and delete any note. This
                  application was created with NodeJS with dependencies such as
                  express, fs, and uuid.
                </p>
                <a
                  href="https://notetaker5850.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-dark text-light"
                >
                  Application
                </a>
                <a
                  className="right align"
                  href="https://github.com/Frank-5850/NoteTaker"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-dark text-light"
                >
                  Github
                </a>
              </div>
            </div>

            <div className="card col-md-3 mx-auto mb-3">
              <img src={Burger} className="card-img-top" alt="" />
              <div className="card-body">
                <h5 className="card-title">Burger App</h5>
                <p>
                  This application was created for users to order a burger of
                  their choice and "eat it". Users can choose to "eat it" and it
                  will move to the "eaten" side of the application. A user also
                  has the choice to reorder burgers that they enjoyed. This
                  application was created using NodeJs with dependencies such as
                  express, express-handlebars, and mysql.
                </p>
                <a
                  href="https://burger-app5850.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-dark text-light"
                >
                  Application
                </a>
                <a
                  className="right align"
                  href="https://github.com/Frank-5850/burger"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-dark text-light"
                >
                  Github
                </a>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="card col-md-3 mx-auto mb-3">
              <img alt="" className="activator" src={EmployeeTracker} />
              <div className="card-body">
                <h5 className="card-title">Employee Tracker</h5>
                <p>
                  This application was created to allow users to view and manage
                  a company's departments, the roles within those departments,
                  and the employees that hold those roles. The user is also able
                  to add departments, add roles to departments, add coworkers to
                  those roles and also update a coworker should a coworker
                  change roles. The application uses the CLI to function. This
                  application was created using NodeJs with dependencies such as
                  inquirer and mysql.
                </p>
                <a
                  href="https://drive.google.com/file/d/1K7vCWNp-Lo5sdpmRnLi6ac7uiSzjuFJd/view"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-dark text-light"
                >
                  Video of application use
                </a>
                <a
                  className="right align"
                  href="https://github.com/Frank-5850/Employee_Tracker"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-dark text-light"
                >
                  Github
                </a>
              </div>
            </div>

            <div className="card col-md-3 mx-auto mb-3">
              <img alt="" className="activator" src={TeamGenerator} />

              <div className="card-body">
                <h5 className="card-title">Team Generator</h5>
                <p>
                  This application was created for users to build a team that
                  consists of a manager, engineers and interns using the CLI.
                  Once the user finishes logging all the necessary information a
                  webpage will be generated that shows all the information
                  entered by the user. This application was created using NodeJs
                  with dependencies such as inquirer and jest.
                </p>
                <a
                  href="https://drive.google.com/file/d/1vkzdVXL5QBYP42vK21vu42k_-VDrhWWN/view"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-dark text-light"
                >
                  Video of application use
                </a>
                <a
                  className="right align"
                  href="https://github.com/Frank-5850/TeamGenerator"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-dark text-light"
                >
                  Github
                </a>
              </div>
            </div>

            <div className="card col-md-3 mx-auto mb-3">
              <img alt="" className="activator" src={Dog} />
              <div className="card-body">
                <h5 className="card-title">Dog Blog</h5>
                <p>
                  This application was created for users who love dogs. A social
                  media app for dog owners to blog about their dogs for their
                  dogs. The application also uses a google maps api that lets
                  users search for dog parks, pet stores, and pet clinics
                  provided with a zip code of the user. This application also
                  has minor authentication which allows the user to sign up and
                  log in. This application was built with NodeJs with
                  dependencies such as bycryptjs, dotenv, express,
                  express-session, mysql2, passport, passport-local, pug, and
                  sequelize.
                </p>
                <a
                  href="https://doggler.herokuapp.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-dark text-light"
                >
                  Application
                </a>
                <a
                  className="right align"
                  href="https://github.com/Frank-5850/dog_blog"
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-dark text-light"
                >
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Home;
