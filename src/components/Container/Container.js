import React from "react";
import "./Container.css";

function Container(props) {
  return <main className={props.sidebar ? "active" : ""} style={props.style}>{props.children}</main>;
}

export default Container;
