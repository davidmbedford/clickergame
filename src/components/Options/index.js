
import React from "react";
import Row from "../Row"
import "./style.css";

function Options(props) {
    return (
        <>
            <div>
                <Row>
                    {props.children}
                </Row>
            </div>
        </>
    )
}

export default Options;