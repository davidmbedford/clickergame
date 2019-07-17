import React from "react";
import "./styles.css";

function Navbar(props) {
    return (
        <nav className="navbar">
            <ul>
                <li><h3 className="navbar-brand">Star Wars: Force Clicker</h3></li>
                <li><p>Score: {props.currentScore} | Top Score: {props.highScore}</p></li>
            </ul>
        </nav>
    );
}

export default Navbar;