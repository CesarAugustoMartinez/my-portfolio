import React from "react";
import BikeShopApp from "../../images/bikeShopApp.png";
import BurgerApp from "../../images/burgerApp.png";
import EmployeeSum from "../../images/employeeSum.png";
import JavaScriptQuiz from "../../images/javaScriptQuiz.png";
import NoteTaker from "../../images/noteTaker.png";
import PasswordGenerator from "../../images/passwordGenerator.png";
import WeatherDashboard from "../../images/weatherDashboard.png";
import WorkDayScheduler from "../../images/workDayScheduler.png";
import EmployeeTracker from "../../images/employeeTracker.gif";
import MBDirectapp from "../../images/mbdirect.png";
import FitnessTracker from "../../images/fitnessTracker.png";
import BudgetTracker from "../../images/budgetTracker.png";
import TrailMixer from "../../images/trailMixer.png";

function Projects() {
  return (
    <section id="projects" className="section scrollspy">
      <h3 className="page-title white-text teal">Projects</h3>
      <div className="container">
        <div className="row">
          {/* <!-- MB Direct App--> */}
          <div className="col s12 m6 l4">
            <div className="card medium" style={{ overflow: "visible" }}>
              <div className="card-image waves-effect waves-block waves-light">
                <img
                  className="activator"
                  src={MBDirectapp}
                  alt="MB Direct App"
                />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  MB Direct<i className="material-icons right">more_vert</i>
                </span>
                <div style={{ overflowY: "auto !important" }}>
                  <p>
                    This app connects users to businesses that meets their
                    criteria. This app allows customers to link up with
                    businesses directly, in return businesses can contact,
                    inform, negotiate and deliver customer satisfaction. This
                    website is fully functional, easy to navigate, with build in
                    authentication for users.
                  </p>
                </div>
              </div>
              <div
                className="card-reveal"
                style={{ display: "none", transform: "translateY(0%)" }}
              >
                <span className="card-title grey-text text-darken-4">
                  Technologies<i className="material-icons right">close</i>
                </span>
                <ul>
                  <li>
                    <strong>JavaScript</strong> back-end
                  </li>
                  <li>
                    <strong>jQuery</strong>
                  </li>
                  <li>
                    <strong>node.js</strong>
                  </li>
                  <li>
                    <strong>React.js</strong> front-end
                  </li>
                  <li>
                    <strong>MySQL</strong> database
                  </li>
                  <li>
                    <strong>Bootstrap</strong> CSS Framework
                  </li>
                  <li>
                    Worked with<strong> MERN</strong> model, Node server
                  </li>
                  <li>
                    <strong>
                      express, axios, sequelize, socket.io, mysql12{" "}
                    </strong>{" "}
                    npm packages
                  </li>
                </ul>
                <div className="card-action">
                  <a
                    href="https://mbdirect.herokuapp.com/"
                    rel="noreferrer"
                    target="_blank"
                    data-position="top"
                    data-tooltip="View Online"
                    className="btn-floating btn-large cyan tooltipped"
                  >
                    <i className="fa fa-external-link"></i>
                  </a>
                  <a
                    href="https://github.com/chernanma/MBDirect"
                    rel="noreferrer"
                    target="_blank"
                    data-position="top"
                    data-tooltip="View Repository"
                    className="btn-floating btn-large cyan tooltipped tooltipped"
                  >
                    <i className="fa fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Bike Shop App--> */}
          <div className="col s12 m6 l4">
            <div className="card medium" style={{ overflow: "visible" }}>
              <div className="card-image waves-effect waves-block waves-light">
                <img
                  className="activator"
                  src={BikeShopApp}
                  alt="Bike Shop App"
                />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  Bike Shop App<i className="material-icons right">more_vert</i>
                </span>
                <div style={{ overflowY: "auto !important" }}>
                  <p>
                    User will be able to search for bicycle types, search for
                    parts and accessories, and request repair services for
                    bicycles. The app will also allow the owner and employee to
                    perform the CRUD operations for the products, orders,
                    employees, and customers.
                  </p>
                </div>
              </div>
              <div
                className="card-reveal"
                style={{ display: "none", transform: "translateY(0%)" }}
              >
                <span className="card-title grey-text text-darken-4">
                  Technologies<i className="material-icons right">close</i>
                </span>
                <ul>
                  <li>
                    <strong>jQuery</strong> back-end
                  </li>
                  <li>
                    <strong>JavaScript</strong>
                  </li>
                  <li>
                    <strong>node.js</strong>
                  </li>
                  <li>
                    <strong>HTML</strong> front-end
                  </li>
                  <li>
                    <strong>MySQL</strong> database
                  </li>
                  <li>
                    <strong>Bootstrap</strong> CSS Framework
                  </li>
                  <li>
                    Worked with<strong> MVC</strong> model, Node server
                  </li>
                  <li>
                    <strong>Express, Handlebars</strong> npm packages
                  </li>
                  <li>
                    <strong>S3 bucket </strong> AWS
                  </li>
                </ul>
                <div className="card-action">
                  <a
                    href="https://new-bike-shop.herokuapp.com/"
                    rel="noreferrer"
                    target="_blank"
                    data-position="top"
                    data-tooltip="View Online"
                    className="btn-floating btn-large cyan tooltipped"
                  >
                    <i className="fa fa-external-link"></i>
                  </a>
                  <a
                    href="https://github.com/chernanma/New-Bike-Shop"
                    rel="noreferrer"
                    target="_blank"
                    data-position="top"
                    data-tooltip="View Repository"
                    className="btn-floating btn-large cyan tooltipped tooltipped"
                  >
                    <i className="fa fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Mixer Trail--> */}
          <div className="col s12 m6 l4">
            <div className="card medium" style={{ overflow: "visible" }}>
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={TrailMixer} alt="Trail Mix" />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  Trail Mixer<i className="material-icons right">more_vert</i>
                </span>

                <p>
                  The goal of this project is create an application that can
                  recommend hiking, biking, running and ski trails near a
                  location. The User can explore new trails as well as get a
                  general idea of what the trail entails.
                </p>
              </div>
              <div
                className="card-reveal"
                style={{ display: "none", transform: "translateY(0%)" }}
              >
                <span className="card-title grey-text text-darken-4">
                  Technologies<i className="material-icons right">close</i>
                </span>
                <ul>
                  <li>
                    <strong>jQuery</strong> back-end
                  </li>
                  <li>
                    <strong>JavaScript</strong> back-end
                  </li>
                  <li>
                    <strong>HTML</strong> front-end
                  </li>
                  <li>
                    Open Weather and Hiking<strong> API</strong>
                  </li>
                  <li>
                    <strong>Materialize</strong> CSS Framework
                  </li>
                  <li>
                    <strong>Client-side rendering</strong> via AJAX
                  </li>
                  <li>
                    <strong>Visual Studio Code</strong> source-code editor
                  </li>
                </ul>
                <div className="card-action">
                  <a
                    href="https://lucasbryg.github.io/Group-Project-1/"
                    rel="noreferrer"
                    target="_blank"
                    data-position="top"
                    data-tooltip="View Online"
                    className="btn-floating btn-large cyan tooltipped"
                  >
                    <i className="fa fa-external-link"></i>
                  </a>
                  <a
                    href="https://github.com/lucasBRYG/Group-Project-1"
                    rel="noreferrer"
                    target="_blank"
                    data-position="top"
                    data-tooltip="View Repository"
                    className="btn-floating btn-large cyan tooltipped tooltipped"
                  >
                    <i className="fa fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>          
          {/* <!-- Fitness Tracker App--> */}
          <div className="col s12 m6 l4">
            <div className="card medium" style={{ overflow: "visible" }}>
              <div className="card-image waves-effect waves-block waves-light">
                <img
                  className="activator"
                  src={FitnessTracker}
                  alt="Fitness Tracker"
                />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  Fitness Tracker
                  <i className="material-icons right">more_vert</i>
                </span>
                <div style={{ overflowY: "auto !important" }}>
                  <p>
                    The goal of this app is to create a workout tracker. This
                    app will require to create Mongo database with a Mongoose
                    schema and handle route with Express. The user will be able
                    to create and tack daily workouts. Also It will be able to
                    log multiple exercises in a workout on a given day.
                  </p>
                </div>
              </div>
              <div
                className="card-reveal"
                style={{ display: "none", transform: "translateY(0%)" }}
              >
                <span className="card-title grey-text text-darken-4">
                  Technologies<i className="material-icons right">close</i>
                </span>
                <ul>
                  <li>
                    <strong>JavaScript</strong> back-end
                  </li>
                  <li>
                    <strong>Node.js</strong> back-end
                  </li>
                  <li>
                    <strong>HTML</strong> front-end
                  </li>
                  <li>
                    <strong>Bootstrap</strong> CSS Framework
                  </li>
                  <li>
                    <strong>Mongodb</strong> database
                  </li>
                  <li>
                    <strong>Express, Mongoose</strong> npm packages
                  </li>
                </ul>
                <div className="card-action">
                  <a
                    href="https://peaceful-dusk-42448.herokuapp.com/?id=5fe026173fc08b0f4fe3d5a9"
                    rel="noreferrer"
                    target="_blank"
                    data-position="top"
                    data-tooltip="View Online"
                    className="btn-floating btn-large cyan tooltipped"
                  >
                    <i className="fa fa-external-link"></i>
                  </a>
                  <a
                    href="https://github.com/CesarAugustoMartinez/Workout-Tracker"
                    rel="noreferrer"
                    target="_blank"
                    data-position="top"
                    data-tooltip="View Repository"
                    className="btn-floating btn-large cyan tooltipped tooltipped"
                  >
                    <i className="fa fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Budget Trackers App--> */}
          <div className="col s12 m6 l4">
            <div className="card medium" style={{ overflow: "visible" }}>
              <div className="card-image waves-effect waves-block waves-light">
                <img
                  className="activator"
                  src={BudgetTracker}
                  alt="Budget Tracker"
                />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  Online/Offline Budget Tracker
                  <i className="material-icons right">more_vert</i>
                </span>
                <div style={{ overflowY: "auto !important" }}>
                  <p>
                    This app will require to create Mongo database with a
                    Mongoose schema and handle route with Express. The user will
                    be able to add expenses and deposits to their budget with or
                    without a connection. When entering transactions offline,
                    they should populate the total when brought back online.
                  </p>
                </div>
              </div>
              <div
                className="card-reveal"
                style={{ display: "none", transform: "translateY(0%)" }}
              >
                <span className="card-title grey-text text-darken-4">
                  Technologies<i className="material-icons right">close</i>
                </span>
                <ul>
                  <li>
                    <strong>JavaScript</strong> back-end
                  </li>
                  <li>
                    <strong>Node.js</strong> back-end
                  </li>
                  <li>
                    <strong>HTML</strong> front-end
                  </li>
                  <li>
                    <strong>Bootstrap</strong> CSS Framework
                  </li>
                  <li>
                    <strong>Mongodb</strong> database
                  </li>
                  <li>
                    <strong>Express, Mongoose</strong> npm packages
                  </li>
                  <li>
                    <strong>Service Workers</strong>
                  </li>
                </ul>
                <div className="card-action">
                  <a
                    href="https://glacial-wildwood-83860.herokuapp.com/"
                    rel="noreferrer"
                    target="_blank"
                    data-position="top"
                    data-tooltip="View Online"
                    className="btn-floating btn-large cyan tooltipped"
                  >
                    <i className="fa fa-external-link"></i>
                  </a>
                  <a
                    href="https://github.com/CesarAugustoMartinez/Online-Offline-Budget-Trackers"
                    rel="noreferrer"
                    target="_blank"
                    data-position="top"
                    data-tooltip="View Repository"
                    className="btn-floating btn-large cyan tooltipped tooltipped"
                  >
                    <i className="fa fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Weather Dashboard App--> */}
          <div className="col s12 m6 l4">
            <div className="card medium" style={{ overflow: "visible" }}>
              <div className="card-image waves-effect waves-block waves-light">
                <img
                  className="activator"
                  src={WeatherDashboard}
                  alt="Weather Dashboard"
                />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  Weather Dashboard
                  <i className="material-icons right">more_vert</i>
                </span>
                <div style={{ overflowY: "auto !important" }}>
                  <p>
                    The goal of this app is create a Weather Dashboard
                    retrieving data from another application's API. This app
                    will make requests with specific parameters to a URL.
                  </p>
                </div>
              </div>
              <div
                className="card-reveal"
                style={{ display: "none", transform: "translateY(0%)" }}
              >
                <span className="card-title grey-text text-darken-4">
                  Technologies<i className="material-icons right">close</i>
                </span>
                <ul>
                  <li>
                    <strong>jQuery</strong> back-end
                  </li>
                  <li>
                    <strong>HTML</strong> front-end
                  </li>
                  <li>
                    <strong>Bootstrap</strong> CSS Framework
                  </li>
                  <li>
                    Open Weather<strong> API</strong>
                  </li>
                  <li>
                    <strong>Client-side rendering</strong> via AJAX
                  </li>
                </ul>
                <div className="card-action">
                  <a
                    href="https://cesaraugustomartinez.github.io/Weather_Dashboard/"
                    rel="noreferrer"
                    target="_blank"
                    data-position="top"
                    data-tooltip="View Online"
                    className="btn-floating btn-large cyan tooltipped"
                  >
                    <i className="fa fa-external-link"></i>
                  </a>
                  <a
                    href="https://github.com/CesarAugustoMartinez/Weather_Dashboard"
                    rel="noreferrer"
                    target="_blank"
                    data-position="top"
                    data-tooltip="View Repository"
                    className="btn-floating btn-large cyan tooltipped tooltipped"
                  >
                    <i className="fa fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Note Taker --> */}
          <div className="col s12 m6 l4">
            <div className="card medium" style={{ overflow: "visible" }}>
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={NoteTaker} alt="Note Taker" />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  Note Taker<i className="material-icons right">more_vert</i>
                </span>
                <div style={{ overflowY: "auto !important" }}>
                  <p>
                    {" "}
                    This app creates an application that can be used to write,
                    save, and delete notes. This application will use an express
                    backend and save and retrieve note data from a JSON file.
                    This app was builded using NODE.js code to generate a
                    dynamically html file and control API routes.
                  </p>
                </div>
              </div>
              <div
                className="card-reveal"
                style={{ display: "none", transform: "translateY(0%)" }}
              >
                <span className="card-title grey-text text-darken-4">
                  Technologies<i className="material-icons right">close</i>
                </span>
                <ul>
                  <li>
                    <strong>JavaScript</strong> back-end
                  </li>
                  <li>
                    <strong>HTML</strong> front-end
                  </li>
                  <li>
                    <strong>Bootstrap</strong> CSS Framework
                  </li>
                  <li>
                    <strong>NPM</strong> modules
                  </li>
                  <li>
                    <strong>Node.js</strong>
                  </li>
                  <li>
                    <strong>Express</strong>
                  </li>
                  <li>
                    <strong>Visual Studio Code</strong> source-code editor
                  </li>
                </ul>
                <div className="card-action">
                  <a
                    href="https://afternoon-island-56967.herokuapp.com/"
                    rel="noreferrer"
                    target="_blank"
                    data-position="top"
                    data-tooltip="View Online"
                    className="btn-floating btn-large cyan tooltipped"
                  >
                    <i className="fa fa-external-link"></i>
                  </a>
                  <a
                    href="https://github.com/CesarAugustoMartinez/Note_Taker"
                    rel="noreferrer"
                    target="_blank"
                    data-position="top"
                    data-tooltip="View Repository"
                    className="btn-floating btn-large cyan tooltipped tooltipped"
                  >
                    <i className="fa fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Burger Logger --> */}
          <div className="col s12 m6 l4">
            <div className="card medium" style={{ overflow: "visible" }}>
              <div className="card-image waves-effect waves-block waves-light">
                <img className="activator" src={BurgerApp} alt="Burger App" />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  Burger Logger<i className="material-icons right">more_vert</i>
                </span>
                <div style={{ overflowY: "auto !important" }}>
                  <p>
                    {" "}
                    The goal of this app is to create a burger logger with
                    MySQL, Node, Express, Handlebars and a homemade ORM.
                    Following the MVC design pattern, using Node and MySQL to
                    query and route data in your app, and Handlebars to generate
                    your HTML.
                  </p>
                </div>
              </div>
              <div
                className="card-reveal"
                style={{ display: "none", transform: "translateY(0%)" }}
              >
                <span className="card-title grey-text text-darken-4">
                  Technologies<i className="material-icons right">close</i>
                </span>
                <ul>
                  <li>
                    <strong>JavaScript</strong> back-end
                  </li>
                  <li>
                    <strong>HTML</strong> front-end
                  </li>
                  <li>
                    <strong>Bootstrap</strong> CSS Framework
                  </li>
                  <li>
                    <strong>MySQL</strong> database
                  </li>
                  <li>
                    <strong>NPM</strong> modules
                  </li>
                  <li>
                    <strong>Node.js</strong>
                  </li>
                  <li>
                    <strong>Express</strong>
                  </li>
                  <li>
                    <strong>Handlebars</strong>
                  </li>
                  <li>
                    <strong>Visual Studio Code</strong> source-code editor
                  </li>
                </ul>
                <div className="card-action">
                  <a
                    href="https://guarded-retreat-27256.herokuapp.com/"
                    rel="noreferrer"
                    target="_blank"
                    data-position="top"
                    data-tooltip="View Online"
                    className="btn-floating btn-large cyan tooltipped"
                  >
                    <i className="fa fa-external-link"></i>
                  </a>
                  <a
                    href="https://github.com/CesarAugustoMartinez/Burger"
                    rel="noreferrer"
                    target="_blank"
                    data-position="top"
                    data-tooltip="View Repository"
                    className="btn-floating btn-large cyan tooltipped tooltipped"
                  >
                    <i className="fa fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Password Generator --> */}
          <div className="col s12 m6 l4">
            <div className="card medium" style={{ overflow: "visible" }}>
              <div className="card-image waves-effect waves-block waves-light">
                <img
                  className="activator"
                  src={PasswordGenerator}
                  alt="PasswordGenerator"
                />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  Password Generator
                  <i className="material-icons right">more_vert</i>
                </span>
                <div style={{ overflowY: "auto !important" }}>
                  <p>
                    The goal of this app is generate a security password based
                    on user-selected criteria. The use of Javascript code will
                    permit to create variables, arrays, functions and conditions
                    for generate a strong password that provides greater
                    security.
                  </p>
                </div>
              </div>
              <div
                className="card-reveal"
                style={{ display: "none", transform: "translateY(0%)" }}
              >
                <span className="card-title grey-text text-darken-4">
                  Technologies<i className="material-icons right">close</i>
                </span>
                <ul>
                  <li>
                    <strong>JavaScript</strong> back-end
                  </li>
                  <li>
                    <strong>HTML</strong> front-end
                  </li>
                  <li>
                    <strong>Bootstrap</strong> CSS Framework
                  </li>
                  <li>
                    <strong>Visual Studio Code</strong> source-code editor
                  </li>
                </ul>
                <div className="card-action">
                  <a
                    href="https://cesaraugustomartinez.github.io/Password_Generator/"
                    rel="noreferrer"
                    target="_blank"
                    data-position="top"
                    data-tooltip="View Online"
                    className="btn-floating btn-large cyan tooltipped"
                  >
                    <i className="fa fa-external-link"></i>
                  </a>
                  <a
                    href="https://github.com/CesarAugustoMartinez/Password_Generator"
                    rel="noreferrer"
                    target="_blank"
                    data-position="top"
                    data-tooltip="View Repository"
                    className="btn-floating btn-large cyan tooltipped tooltipped"
                  >
                    <i className="fa fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- JavaScript Quiz --> */}
          <div className="col s12 m6 l4">
            <div className="card medium" style={{ overflow: "visible" }}>
              <div className="card-image waves-effect waves-block waves-light">
                <img
                  className="activator"
                  src={JavaScriptQuiz}
                  alt="JavaScript Quiz"
                />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  JavaScript Quiz
                  <i className="material-icons right">more_vert</i>
                </span>
                <div style={{ overflowY: "auto !important" }}>
                  <p>
                    This app generates a Quiz which provides multiple choice
                    questions related to JavaScript. The user will have to read
                    all the given options and click over the correct answer.
                    After all questions have been answered the user could save
                    the score.
                  </p>
                </div>
              </div>
              <div
                className="card-reveal"
                style={{ display: "none", transform: "translateY(0%)" }}
              >
                <span className="card-title grey-text text-darken-4">
                  Technologies<i className="material-icons right">close</i>
                </span>
                <ul>
                  <li>
                    <strong>JavaScript</strong> back-end
                  </li>
                  <li>
                    <strong>HTML</strong> front-end
                  </li>
                  <li>
                    <strong>Bootstrap</strong> CSS Framework
                  </li>
                  <li>
                    <strong>Visual Studio Code</strong> source-code editor
                  </li>
                </ul>
                <div className="card-action">
                  <a
                    href="https://cesaraugustomartinez.github.io/JavaScript_Quiz/"
                    rel="noreferrer"
                    target="_blank"
                    data-position="top"
                    data-tooltip="View Online"
                    className="btn-floating btn-large cyan tooltipped"
                  >
                    <i className="fa fa-external-link"></i>
                  </a>
                  <a
                    href="https://github.com/CesarAugustoMartinez/JavaScript_Quiz"
                    rel="noreferrer"
                    target="_blank"
                    data-position="top"
                    data-tooltip="View Repository"
                    className="btn-floating btn-large cyan tooltipped tooltipped"
                  >
                    <i className="fa fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Employee Tracker --> */}
          <div className="col s12 m6 l4">
            <div className="card medium" style={{ overflow: "visible" }}>
              <div className="card-image waves-effect waves-block waves-light">
                <img
                  className="activator"
                  src={EmployeeTracker}
                  alt="Employee Tracker"
                />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  Employee Tracker
                  <i className="material-icons right">more_vert</i>
                </span>
                <div style={{ overflowY: "auto !important" }}>
                  <p>
                    The goal of this project is to architect and build a
                    solution for managing a company's employees using node,
                    inquirer, and MySQL. It does CRUD operations for employees,
                    departments and roles.
                  </p>
                </div>
              </div>
              <div
                className="card-reveal"
                style={{ display: "none", transform: "translateY(0%)" }}
              >
                <span className="card-title grey-text text-darken-4">
                  Technologies<i className="material-icons right">close</i>
                </span>
                <ul>
                  <li>
                    <strong>JavaScript</strong> back-end
                  </li>
                  <li>
                    <strong>Node.js</strong>
                  </li>
                  <li>
                    <strong>Inquirer NPM</strong> module
                  </li>
                  <li>
                    <strong>Package.json</strong>
                  </li>
                  <li>
                    <strong>Visual Studio Code</strong> source-code editor
                  </li>
                </ul>
                <div className="card-action">
                  <a
                    href="https://cesaraugustomartinez.github.io/Employee_Tracker/video.html"
                    rel="noreferrer"
                    target="_blank"
                    data-position="top"
                    data-tooltip="View Online"
                    className="btn-floating btn-large cyan tooltipped"
                  >
                    <i className="fa fa-external-link"></i>
                  </a>
                  <a
                    href="https://github.com/CesarAugustoMartinez/Employee_Tracker"
                    rel="noreferrer"
                    target="_blank"
                    data-position="top"
                    data-tooltip="View Repository"
                    className="btn-floating btn-large cyan tooltipped tooltipped"
                  >
                    <i className="fa fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Template employee --> */}
          <div className="col s12 m6 l4">
            <div className="card medium" style={{ overflow: "visible" }}>
              <div className="card-image waves-effect waves-block waves-light">
                <img
                  className="activator"
                  src={EmployeeSum}
                  alt="Employee Sumary"
                />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  Employee Summary Generator
                  <i className="material-icons right">more_vert</i>
                </span>
                <div style={{ overflowY: "auto !important" }}>
                  <p>
                    This app creates a command-line application that takes
                    information about employees and dynamically generates an
                    HTML webpage that displays summaries for each person. The
                    user will enter data using inquirer.prompts Inquire package.
                    This app was builded using NODE.js code to generate a
                    dynamically command-line app.
                  </p>
                </div>
              </div>
              <div
                className="card-reveal"
                style={{ display: "none", transform: "translateY(0%)" }}
              >
                <span className="card-title grey-text text-darken-4">
                  Technologies<i className="material-icons right">close</i>
                </span>
                <ul>
                  <li>
                    <strong>JavaScript</strong> back-end
                  </li>
                  <li>
                    <strong>HTML</strong> front-end
                  </li>
                  <li>
                    <strong>Node.js</strong>
                  </li>
                  <li>
                    <strong>NPM</strong> modules
                  </li>
                  <li>
                    <strong>Package.json</strong>
                  </li>
                  <li>
                    <strong>Visual Studio Code</strong> source-code editor
                  </li>
                </ul>
                <div className="card-action">
                  <a
                    href="https://cesaraugustomartinez.github.io/Template_Engine-Employee_Summary/video.html"
                    rel="noreferrer"
                    target="_blank"
                    data-position="top"
                    data-tooltip="View Online"
                    className="btn-floating btn-large cyan tooltipped"
                  >
                    <i className="fa fa-external-link"></i>
                  </a>
                  <a
                    href="https://github.com/CesarAugustoMartinez/Template_Engine-Employee_Summary"
                    rel="noreferrer"
                    target="_blank"
                    data-position="top"
                    data-tooltip="View Repository"
                    className="btn-floating btn-large cyan tooltipped tooltipped"
                  >
                    <i className="fa fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- Work Day Scheduler --> */}
          <div className="col s12 m6 l4">
            <div className="card medium" style={{ overflow: "visible" }}>
              <div className="card-image waves-effect waves-block waves-light">
                <img
                  className="activator"
                  src={WorkDayScheduler}
                  alt="Work Day Scheduler"
                />
              </div>
              <div className="card-content">
                <span className="card-title activator grey-text text-darken-4">
                  Work Day Scheduler
                  <i className="material-icons right">more_vert</i>
                </span>
                <div style={{ overflowY: "auto !important" }}>
                  <p>
                    This app creates a simple calendar that allows the user to
                    save events for each hour of the day. This app was builded
                    using jQuery code to generate a dynamically HTML and CSS
                    pages
                  </p>
                </div>
              </div>
              <div
                className="card-reveal"
                style={{ display: "none", transform: "translateY(0%)" }}
              >
                <span className="card-title grey-text text-darken-4">
                  Technologies<i className="material-icons right">close</i>
                </span>
                <ul>
                  <li>
                    <strong>jQuery</strong> back-end
                  </li>
                  <li>
                    <strong>HTML</strong> front-end
                  </li>
                  <li>
                    <strong>Bootstrap</strong> CSS Framework
                  </li>
                  <li>
                    <strong>Visual Studio Code</strong> source-code editor
                  </li>
                </ul>
                <div className="card-action">
                  <a
                    href="https://cesaraugustomartinez.github.io/Work_Day_Scheduler/Develop/"
                    rel="noreferrer"
                    target="_blank"
                    data-position="top"
                    data-tooltip="View Online"
                    className="btn-floating btn-large cyan tooltipped"
                  >
                    <i className="fa fa-external-link"></i>
                  </a>
                  <a
                    href="https://github.com/CesarAugustoMartinez/Work_Day_Scheduler"
                    rel="noreferrer"
                    target="_blank"
                    data-position="top"
                    data-tooltip="View Repository"
                    className="btn-floating btn-large cyan tooltipped tooltipped"
                  >
                    <i className="fa fa-github"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
