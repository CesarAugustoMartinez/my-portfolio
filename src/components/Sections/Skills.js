import React from "react";
import bootstrap from "../../images/skills/bootstrap.png";
import css3 from "../../images/skills/css3.png";
import github from "../../images/skills/github.png";
import heroku from "../../images/skills/heroku.png";
import html5 from "../../images/skills/html5.png";
import illustrador from "../../images/skills/illustrador.png";
import javascript from "../../images/skills/javascript.png";
import jquery from "../../images/skills/jquery.png";
import materialize from "../../images/skills/materialize.png";
import mongodb from "../../images/skills/mongodb.png";
import mysql from "../../images/skills/mysql.png";
import nodejs from "../../images/skills/nodejs.png";
import photoshop from "../../images/skills/photoshop.png";
import react from "../../images/skills/react.png";

function Skills() {
  return (
    <section id="skills" className="section scrollspy">
      <h3 className="page-title white-text teal">Skills</h3>
      <div className="container">
        <div className="card">
          <div className="card-content">
            <h4 className="blue-text light">FRONT-END</h4>
            <div className="row text-center">
              <div className="col s4 m2">
                <img alt="" src={react} className="responsive-img" />
                React
              </div>
              <div className="col s4 m2">
                <img alt="" src={html5} className="responsive-img" />
                HTML5
              </div>
              <div className="col s4 m2">
                <img alt="" src={css3} className="responsive-img" />
                CSS3
              </div>
              <div className="col s4 m2">
                <img alt="" src={bootstrap} className="responsive-img" />
                Bootstrap
              </div>
              <div className="col s4 m2">
                <img alt="" src={materialize} className="responsive-img" />
                Materialize
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <h4 className="blue-text light">Back-End</h4>
            <div className="row text-center">
              <div className="col s4 m2">
                <img alt="" src={javascript} className="responsive-img" />
                Javascript
              </div>
              <div className="col s4 m2">
                <img alt="" src={jquery} className="responsive-img" />
                jQuery
              </div>
              <div className="col s4 m2">
                <img alt="" src={nodejs} className="responsive-img" />
                Node
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <h4 className="blue-text light">Database</h4>
            <div className="row text-center">
              <div className="col s4 m2">
                <img alt="" src={mongodb} className="responsive-img" />
                MongoDB
              </div>
              <div className="col s4 m2">
                <img alt="" src={mysql} className="responsive-img" />
                MySQL
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <h4 className="blue-text light">Other</h4>
            <div className="row text-center">
              <div className="col s4 m2">
                <img alt="" src={github} className="responsive-img" />
                Github
              </div>
              <div className="col s4 m2">
                <img alt="" src={heroku} className="responsive-img" />
                Heroku
              </div>
              <div className="col s4 m2">
                <img alt="" src={photoshop} className="responsive-img" />
                Photoshop
              </div>
              <div className="col s4 m2">
                <img alt="" src={illustrador} className="responsive-img" />
                Illustrator
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
