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
import sequelize from "../../images/skills/sequelize.png";
import sql from "../../images/skills/sql.png";
import visualstudio from "../../images/skills/visualstudio.png";
import npm from "../../images/skills/npm.png";
import cplusplus from "../../images/skills/c++.png";
import net from "../../images/skills/net.png";
import socketio from "../../images/skills/socketio.png";
import redux from "../../images/skills/redux.png";
import axios from "../../images/skills/axios.png";
import aws from "../../images/skills/Aws.png";
import azure from "../../images/skills/azure.png";
import salesforce from "../../images/skills/salesforce.png";
import soql from "../../images/skills/soql.png";
import apexlwc from "../../images/skills/apexlwc.png";

function Skills() {
  return (
    <section id="skills" className="section scrollspy">
      <h3 className="page-title white-text teal">Skills</h3>
      <div className="container">
        <div className="card">
          <div className="card-content">
            <h4 className="blue-text light">Front-End</h4>
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
                <img alt="" src={redux} className="responsive-img" />
                Redux
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
              <div className="col s4 m2" style={{ paddingTop: "20px" }}>
                <img alt="" src={apexlwc} className="responsive-img" />
                LWC - VisualForce
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <h4 className="blue-text light">Back-End</h4>
            <div className="row text-center">
              <div className="col s4 m2">
                <img
                  alt=""
                  src={cplusplus}
                  className="responsive-img"
                  style={{ height: "100px", padding: "30px" }}
                />
                C++
              </div>
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
              <div className="col s4 m2">
                <img
                  alt=""
                  src={net}
                  className="responsive-img"
                  style={{ height: "100px", padding: "20px" }}
                />
                .Net
              </div>
              <div className="col s4 m2">
                <img alt="" src={sequelize} className="responsive-img" />
                Sequelize
              </div>
              <div className="col s4 m2">
                <img
                  alt=""
                  src={axios}
                  className="responsive-img"
                  style={{ height: "100px", padding: "30px" }}
                />
                Axios
              </div>
              <div className="col s4 m2">
                <img
                  alt=""
                  src={socketio}
                  className="responsive-img"
                  style={{ paddingTop: "20px" }}
                />
                Socket.io
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-content">
            <h4 className="blue-text light">Database</h4>
            <div className="row text-center">
              <div className="col s4 m2">
                <img
                  alt=""
                  src={sql}
                  className="responsive-img"
                  style={{ height: "100px", paddingTop: "20px" }}
                />
                SQL
              </div>
              <div className="col s4 m2">
                <img
                  alt=""
                  src={soql}
                  className="responsive-img"
                  style={{ height: "100px", paddingTop: "20px" }}
                />
                SQL
              </div>
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
                <img
                  alt=""
                  src={salesforce}
                  className="responsive-img"
                  style={{ height: "100px", paddingTop: "20px" }}
                />
                Salesforce
              </div>
              <div className="col s4 m2">
                <img
                  alt=""
                  src={azure}
                  className="responsive-img"
                  style={{ height: "100px", paddingTop: "20px" }}
                />
                Azure
              </div>
              <div className="col s4 m2">
                <img
                  alt=""
                  src={github}
                  className="responsive-img"
                  style={{ height: "100px", paddingTop: "20px" }}
                />
                Github
              </div>
              <div className="col s4 m2">
                <img
                  alt=""
                  src={npm}
                  className="responsive-img"
                  style={{ height: "100px", paddingTop: "30px" }}
                />
                NPM
              </div>
              <div className="col s4 m2">
                <img alt="" src={heroku} className="responsive-img" />
                Heroku
              </div>
              <div className="col s4 m2">
                <img
                  alt=""
                  src={visualstudio}
                  className="responsive-img"
                  style={{ height: "100px", paddingTop: "20px" }}
                />
                Visual Studio
              </div>
              <div className="col s4 m2">
                <img
                  alt=""
                  src={aws}
                  className="responsive-img"
                  style={{ height: "100px", paddingTop: "20px" }}
                />
                AWS
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
