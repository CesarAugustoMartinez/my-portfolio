import React from 'react'
import navImage from '../images/body-bg.png';
import avatar from '../images/Me.jpg';
function Home() {
    return (
        <>
        <nav className="hide-on-small-only" style={{height: "0px"}}>
        <ul className="sidenav sidenav-fixed" style={{transform: "translateX(0%)"}}>
            <li>
                <div className="user-view">
                    <div className="background">
                        <img src={navImage} alt="bg-nav"/>
                    </div>
                    <a href="#intro">
                        <img className="circle" src={avatar} alt="avatar"/>
                    </a>
                    <a href="#intro">
                        <h4 className="teal-text">Cesar A. Martinez</h4>
                    </a>
                    <a href="#title">
                        <span className="black-text email" style={{fontWeight: "bold"}}>FULL STACK DEVELOPER</span>
                    </a>
                </div>
            </li>
            <li className="bold">
                <a href="#about" className="waves-effect waves-dark teal-text "><i
                        className="material-icons small teal-text">person</i><span>About</span></a>
            </li>
            <li className="bold">
                <a href="#experience" className="waves-effect waves-dark cyan-text"><i
                        className="material-icons small cyan-text">trending_up</i><span>Experience</span></a>
            </li>
            <li className="bold">
                <a href="#projects" className="waves-effect waves-dark indigo-text"><i
                        className="material-icons small indigo-text">web</i><span>Projects</span></a>
            </li>
            <li className="bold">
                <a href="#skills" className="waves-effect waves-dark purple-text"><i
                        className="material-icons small purple-text">equalizer</i><span>Skills</span></a>
            </li>
            <li className="bold">
                <a href="#education" className="waves-effect waves-dark red-text"><i
                        className="material-icons small red-text">school</i><span>Education</span></a>
            </li>
            <li className="bold">
                <a href="#contact" className="waves-effect waves-dark brown-text"><i
                        className="material-icons small brown-text">mail</i><span>Contact</span></a>
            </li>
            <li className="bold">
                <a href="#resumeModal" className="waves-effect waves-dark grey-text text-darken-3 modal-trigger">
                    <i className="material-icons small text-darken-3">description</i><span>Resume</span>
                </a>
            </li>
            <li>
                <div className="divider"></div>
            </li>
            <li><a href="#Home" className="subheader">©Copyright - 2020</a></li>
        </ul>
    </nav>
    <nav class="hide-on-large-only trigger z-depth-1" style={{backgroundColor: "transparent"}}>
        <a href="#Home" data-target="nav-mobile" class="top-nav sidenav-trigger waves-effect waves-light circle"><i class="material-icons blue-text">menu</i></a>
        <div class="name-title center-align">
            <a id="name" href="#main" class="teal-text">Cesar A. Martinez - </a><span class="blue-text light">Full Stack Developer</span>
        </div>
    </nav>
    <nav class="hide-on-large only" style={{height: "0px"}}>
        <ul id="nav-mobile" class="sidenav sidenav-fixed" style={{transform: "translateX(0px)"}}>
            <li>
                <div class="user-view">
                    <div class="background">
                        <img src={navImage} alt="nav-bg"/>
                    </div>
                    <a href="#intro">
                        <img class="circle" src={avatar} alt="avatar"/>
                    </a>
                    <a href="#intro">
                        <h4 class="teal-text">Cesar A. Martinez</h4>
                    </a>
                    
                    <a href="#title">
                        <span class="black-text email" style={{fontWeight: "bold"}}>FULL STACK DEVELOPER</span>
                    </a>
                </div>
            </li>
            <li class="bold">
                <a href="#about" class="waves-effect waves-dark teal-text "><i
                        class="material-icons small teal-text">person</i><span>About</span></a>
            </li>
            <li class="bold">
                <a href="#experience" class="waves-effect waves-dark cyan-text"><i
                        class="material-icons small cyan-text">trending_up</i><span>Experience</span></a>
            </li>
            <li class="bold">
                <a href="#projects" class="waves-effect waves-dark indigo-text"><i
                        class="material-icons small indigo-text">web</i><span>Projects</span></a>
            </li>
            <li class="bold">
                <a href="#skills" class="waves-effect waves-dark purple-text"><i
                        class="material-icons small purple-text">equalizer</i><span>Skills</span></a>
            </li>
            <li class="bold">
                <a href="#education" class="waves-effect waves-dark red-text"><i
                        class="material-icons small red-text">school</i><span>Education</span></a>
            </li>
            <li class="bold">
                <a href="#contact" class="waves-effect waves-dark brown-text"><i
                        class="material-icons small brown-text">mail</i><span>Contact</span></a>
            </li>
            <li class="bold">
                <a href="#resumeModal" class="waves-effect waves-dark grey-text text-darken-3 modal-trigger">
                    <i class="material-icons small text-darken-3">description</i><span>Resume</span>
                </a>
            </li>
            <li>
                <div class="divider"></div>
            </li>
            <li><a href="#Home"class="subheader">©Copyright - 2020</a></li>
        </ul>
    </nav>
    </>
    )
}

export default Home
