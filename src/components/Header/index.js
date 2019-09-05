import React from "react";
import "./style.css";

function Header(props) {
  return (
    <header className="header">
      <h1>Test your connection to the force!</h1>
      <h4>Start by clicking below - but be warned, do not click the same character twice.</h4>
      <h3>{props.phrase}</h3>
    </header>
  )
}

export default Header;
