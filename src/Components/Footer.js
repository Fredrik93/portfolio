import React, { Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../index.css'
function Footer(props) {
    const startPageLayout = {
        position: "relative",
        textAlign: "center",
        color: "white",

    }
    const darkOverlay = {
        height: "20vh",
        width: "100%",
        background: "gray",
        opacity: "95%",
        overflow: "hidden"
    }
    const aboutUsImage = {
        objectFit: "cover",
        opacity: "0.4",
        width: "100%",
        height: "60vh"
    }
    const centeredText = {
        position: "absolute",
        top: "40%",
        left: "50%",
        transform: "translate(-50%,-50%",

    }


    return (
        <Fragment>

            <div style={startPageLayout} >
                <Row style={darkOverlay}>
                    <Col style={{ border: "2px solid black" }} >1</Col>
                    <Col style={{ border: "2px solid black" }} >2</Col>
                    <Col style={{ border: "2px solid black" }} >3</Col>
                </Row>
            </div>
        </Fragment >
    )
}

export default Footer