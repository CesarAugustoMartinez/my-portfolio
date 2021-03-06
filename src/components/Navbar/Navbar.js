import React from "react";
import navImage from "../../images/body-bg.png";
import avatar from "../../images/Me.jpg";

import "./Navbar.css";

function Navbar(props) {

  return (
    <div>
      <nav className="navbarSide" style={{ backgroundColor: "white"}}>
           <a
            href="#Home"
            onClick={props.isActive}
            className="menu-bars waves-effect waves-light circle"
          >
            <i className="material-icons blue-text">menu</i>
          </a>
        <div className="name-title center-align" style={{flex: "auto"}}>
          <a id="name" href="#main" className="teal-text" onClick={props.handleClickOpen}>
            Cesar A. Martinez -{" "}
          
          <span className="blue-text light">Full Stack Developer</span>
          </a>
        </div>
      </nav>

      <nav className={props.sidebar ? "nav-menu active" : "nav-menu"}>
        <ul
          className="sidenav sidenav-fixed"
          onClick={props.isActive}
          style={{ transform: "translateX(0%)" }}
        >
          <li>
            <div className="user-view">
              <div className="background">
                <img src={navImage} alt="bg-nav" />
              </div>
              <a href="#intro">
                <img className="circle" src={avatar} alt="avatar" />
              </a>
              <a href="#intro">
                <h4 className="teal-text">Cesar A. Martinez</h4>
              </a>
              <a href="#title">
                <span
                  className="black-text email"
                  style={{ fontWeight: "bold" }}
                >
                  FULL STACK DEVELOPER
                </span>
              </a>
            </div>
          </li>
          <li className="bold">
            <a href="#about" className="waves-effect waves-dark teal-text ">
              <i className="material-icons small teal-text">person</i>
              <span>About</span>
            </a>
          </li>
          <li className="bold">
            <a href="#experience" className="waves-effect waves-dark cyan-text">
              <i className="material-icons small cyan-text">trending_up</i>
              <span>Experience</span>
            </a>
          </li>
          <li className="bold">
            <a href="#projects" className="waves-effect waves-dark indigo-text">
              <i className="material-icons small indigo-text">web</i>
              <span>Projects</span>
            </a>
          </li>
          <li className="bold">
            <a href="#skills" className="waves-effect waves-dark purple-text">
              <i className="material-icons small purple-text">equalizer</i>
              <span>Skills</span>
            </a>
          </li>
          <li className="bold">
            <a href="#education" className="waves-effect waves-dark red-text">
              <i className="material-icons small red-text">school</i>
              <span>Education</span>
            </a>
          </li>
          <li className="bold">
            <a href="#contact" className="waves-effect waves-dark brown-text">
              <i className="material-icons small brown-text">mail</i>
              <span>Contact</span>
            </a>
          </li>
          <li className="bold">
            <a
              href="#resumeModal"
              className="waves-effect waves-dark grey-text text-darken-3 modal-trigger"
              onClick={props.handleClickOpen}
            >
              <i className="material-icons small text-darken-3">description</i>
              <span>Resume</span>
            </a>
          </li>
          <li>
            <div className="divider"></div>
          </li>
          <li>
            <a href="#Home" className="subheader">
              ??Copyright - 2021
            </a>
          </li>
        </ul>
      </nav>  
    </div>
  );
}

export default Navbar;
