import React from 'react'
import { Link } from 'react-router-dom'
function TextBlock(props) {
    const styleText = {
        textAlign: "center"
    }

    return (
        <div style={styleText} >
            <h3> {props.title} </h3>
            <p> {props.text} </p>
            < br />
            <Link to={props.link}>
                <button
                    className="btn btn-lg "
                    id="historyBtn" >{props.buttonLabel}
                </button>
            </Link>

        </div>
    )
} export default TextBlock