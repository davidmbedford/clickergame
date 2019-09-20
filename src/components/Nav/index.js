import React from "react";
import "./style.css";

function Navbar(props) {
    return (
        <nav className="navbar navbar-dark sticky-top bg-dark">

            <a className="navbar-brand mb-0 h1" href="https://github.com/davidmbedford/clickergame">
                {/* <img src="../../assets/rebel-symbol.png" className="d-inline-block align-top" alt="Rebel-logo"/> */}
                <span className="navfont1">Star Wars:</span> <span className="navfont2">Force Clicker</span>
            </a>

            <ul className="align-right navfont3">Score: {props.currentScore} | Top Score: {props.highScore}</ul>
        </nav>
    );
}

export default Navbar;