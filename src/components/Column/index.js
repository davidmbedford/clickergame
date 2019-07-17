import React from "react";
import "./styles.css";

function Column(props) {
  return <div className="col-12">{props.children}</div>;
}

export default Column;