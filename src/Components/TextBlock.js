import React from 'react'
import { Button } from 'react-bootstrap'

function TextBlock(props) {
    const styleText = {
        textAlign: "center"
    }
    const styleBtn = {

    }
    return (
        <div style={styleText} >
            <h3> {props.title} </h3>
            <p> {props.text} </p>
            < br />
            <Button variant="success" to="/history" > <a
                style={styleBtn}
                href="/history"
                target="_blank" rel="noreferrer"
            > VÅR HISTORIA </a> </Button>
        </div>
    )
} export default TextBlock