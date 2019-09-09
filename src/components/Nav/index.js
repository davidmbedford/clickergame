import React from "react";
import "./style.css";

function Navbar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <h3 className="navbar-brand">Star Wars: Force Clicker</h3>
                <p>Score: {props.currentScore} | Top Score: {props.highScore}</p>
        </nav>
    );
}

export default Navbar;