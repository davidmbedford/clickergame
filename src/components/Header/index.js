import React from "react";
import "./style.css";

function Header(props) {
  return (
    <header className="header">
      <h5 className="navfont1">Test your connection to the force!</h5>
      <h5 className="navfont3">Click on all of the characters without hitting the same one twice</h5>
      <br></br>
      <p className="navfont3">{props.phrase}</p>
    </header>
  )
}

export default Header;
