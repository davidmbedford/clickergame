import React from "react";
import "./styles.css";

function OptionsCard({name, image}) {

    return (
        <li className="col-3 list-item">
            <div className="card">
                <img className="img-fluid" alt={name} src={image} />
            </div>
        </li>
    )
}

export default OptionsCard;