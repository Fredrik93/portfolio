import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function ImageBlock(props) {
    const darkOverlay = {
        height: "20rem",
        width: "100%",
        background: "#1A6C7A",
        opacity: "95%",
        overflow: "hidden",

    }
    const homePageImage = {
        objectFit: "cover",
        opacity: "0.4",
        width: "100%",
        height: "20rem",

    }
    const centeredText = {
        position: "absolute",
        top: "40%",
        left: "50%",
        transform: "translate(-50%,-50%",
    }

    return (
        <div style={{ padding: "10px", marginBottom: "10vh" }} >
            <div className="start-page-layout" style={darkOverlay} >
                <img style={homePageImage} src={props.image} alt="textblockimage" />
                <div style={centeredText} >
                    <h3> {props.title} </h3>
                    <p> {props.text} </p>
                    < br />
                    <Link to={props.link}>
                        <button
                            className="btn btn-lg "
                            id="servicesBtn" >{props.buttonLabel}
                        </button>
                    </Link>
                </div>
            </div></div>
    )
} export default ImageBlock