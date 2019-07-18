import React from "react";
import "./style.css";

function OptionsCard({ name, image, onClick }) {

    return (
        <li className="col-3 list-item">
            <div className="card" onClick={() => onClick(name)}>
                <img className="img-fluid" alt={name} src={image} />
            </div>
        </li>
    )
}

export default OptionsCard;

