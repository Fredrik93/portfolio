import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function TextBlock(props) {
    const styleText = {
        textAlign: "center",
        marginTop: "10vh",
        marginBottom: "10vh"
    }

    return (
        <Container>
            <div style={styleText} >
                <h3  > {props.title} </h3>
                <p> {props.text} </p>
                < br />
                <Link to={props.link}>
                    <button
                        className="btn btn-lg "
                        id="historyBtn" >{props.buttonLabel}
                    </button>
                </Link>

            </div>
        </Container>
    )
} export default TextBlock