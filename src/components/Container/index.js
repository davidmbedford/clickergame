import React from "react";
import "./style.css";

function Container(props) {
  return <div className="container-fluid main-background">{props.children}</div>;
}

export default Container;