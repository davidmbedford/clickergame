
import React from "react";
import Row from "../Row"
import "./style.css";

function Options(props) {
    return (
        <>
            <ul>
                <Row>
                    {props.children}
                </Row>
            </ul>
        </>
    )
}

export default Options;