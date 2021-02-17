import React from 'react'
import MsportswearLogo from "../../images/Msportswear.png";
import FoundationLogo from "../../images/foundation.jpg";

function Experience() {
    return (
        <section id="experience" className="section scrollspy">
            <h3 className="page-title white-text teal">Experience</h3>
            <div className="container">
                <div className="card">
                    <div className="card-content">
                        <div className="row">
                            <div className="col s12 m2">
                                <a href="https://www.martinezsportswear.com/" rel="noreferrer" target="_blank"><img
                                        alt="Msportswear logo" src={MsportswearLogo}
                                        className="responsive-img center-block" style={{display: "initial"}} /></a>
                            </div>
                            <div className="col s12 m10">
                                <p>
                                    <span className="card-title"><a href="https://www.martinezsportswear.com/"
                                          rel="noreferrer"  target="_blank" className="teal-text hoverline">Msportswear USA</a></span>
                                </p>
                            </div>
                        </div>
                        <div className="role grey-text">Full-Stack Web Developer</div>
                        <p>
                            <em className="grey-text">Website developer and administrator</em>
                        </p>
                        <h6>Develop Product</h6>
                        <ul>
                            <li>
                                Attracted new customers with website and social media enhancements
                            </li>
                            <li>
                                Lead front-end development, creating and documenting app-wide
                                design system
                            </li>
                            <li>
                                Implemented database system to manage clothes inventory for the web page
                            </li>
                            <li>Developed mobile app</li>
                            <li>
                                Tools: JS, jQuery, HTML, CSS, Bootstrap
                            </li>
                        </ul>
                        <h6>Accomplishments</h6>
                        <ul>
                            <li>
                                Dramatically increased speed of selling, and updating images for the webpage
                            </li>
                            <li>
                                Built tool to convert HRIS data into user accounts to simplify
                                onboarding
                            </li>
                        </ul>
                    </div>
                    <div className="card-action">
                        <span>July 2018 - Present | Gaithersburg, MD</span>
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <div className="row">
                            <div className="col s12 m2">
                                <a href="https://www.martinezsportswear.com/" rel="noreferrer" target="_blank"><img
                                        alt="Msportswear logo" src={MsportswearLogo}
                                        className="responsive-img center-block" style={{display: "initial"}}/></a>
                            </div>
                            <div className="col s12 m10">
                                <p>
                                    <span className="card-title"><a href="https://www.martinezsportswear.com/"
                                          rel="noreferrer"  target="_blank" className="teal-text hoverline">Msportswear ECU</a></span>
                                </p>
                            </div>
                        </div>
                        <div className="role grey-text">General Manager, Co-Owner</div>
                        <p>
                            <em className="grey-text">Created family-owned company while studying for Master’s degree</em>
                        </p>
                        <h6>Develop Product</h6>
                        <ul>
                            <li>
                                Manage projects for IT systems and manufacturing processes using the latest
                                technologies.
                            </li>
                            <li>
                                Tools: Washatch, Optitex, Adobe Suite, Automatizer
                            </li>
                        </ul>
                        <h6>Accomplishments</h6>
                        <ul>
                            <li>
                                Oversee production of high-quality competition clothing for high-endurance athletes
                            </li>
                            <li>
                                Income and production grew 300% between 2012 and 2013, 100% from 2015 to 2016 and 100%
                                from 2016 to 2017
                            </li>
                        </ul>
                    </div>
                    <div className="card-action">
                        <span>August 2012 - 2018 | Cuenca, Azuay - Ecuador</span>
                    </div>
                </div>
                <div className="card">
                    <div className="card-content">
                        <div className="row">
                            <div className="col s12 m2">
                                <a href="https://www.fundacionhogardelecuador.org/" rel="noreferrer" target="_blank"><img
                                        alt="Msportswear logo" src={FoundationLogo}
                                        className="responsive-img center-block" style={{display: "initial"}}/></a>
                            </div>
                            <div className="col s12 m10">
                                <p>
                                    <span className="card-title"><a href="https://www.fundacionhogardelecuador.org/"
                                          rel="noreferrer"  target="_blank" className="teal-text hoverline">“Hogar del Ecuador”
                                            Foundation</a></span>
                                </p>
                            </div>
                        </div>
                        <div className="role grey-text">System Engineer</div>
                        <p>
                            <em className="grey-text">Website developer and Network administrator</em>
                        </p>
                        <h6>Develop Product</h6>
                        <ul>
                            <li>
                                Lead front-end development, creating and documenting app-wide design system
                            </li>
                            <li>
                                Creating easy-to-use website for clients for local clients
                            </li>
                            <li>
                                Attracted new customers with website and social media enhancements
                            </li>
                            <li>
                                Developed an Online Radio for the foundation
                            </li>
                        </ul>
                    </div>
                    <div className="card-action">
                        <span>August 2014 - 2015 | Cuenca, Azuay - Ecuador</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
