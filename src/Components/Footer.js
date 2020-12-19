import React, { Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../Assets/logo.png'
import '../index.css'
import '../Styles/Footer.css'
import cv from '../Assets/resume-2020.pdf'
function Footer(props) {
    const startPageLayout = {
        position: "relative",
        textAlign: "center",
        color: "white",

    }
    const darkOverlay = {
        height: "25vh",
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
        border: "2px solid black"

    }


    return (
        <Fragment>

            <div style={startPageLayout} >
                <Row style={{ backgroundColor: "#eee" }}>
                    <Col style={{ border: "2px solid black", margin: "4vh" }} >
                        <img src={logo} alt="uiclogo" />
                        < br />
                        <a id="icons" target="_blank" href="https://github.com/Fredrik93"> <i className="fa fa-github" ></i> </a>
                        <a id="icons" target="_blank" href="https://www.linkedin.com/in/carl-fredrik-ullman-919645174/"  > <i className="fa fa-linkedin" ></i> </a>
                        <a id="icons" target="_blank" href={cv}  > <i className="fa fa-file"></i> </a>

                    </Col>
                    <Col style={{ border: "2px solid black", margin: "4vh" }} >
                        <ul style={{ listStyleType: "none", textAlign: "left", color: "black" }} >
                            <h5 style={{ fontWeight: "bold" }} >  Snabblänkar</h5>
                            <Link className="links" to="/services" >  <li> Tjänster (Link Comp) </li>  </Link>
                            <a className="links" href="/services" > <li> Tjänster </li> </a>
                            <a className="links" href="/about-us" > <li> Om oss </li> </a>
                            <a className="links" > <li> Kontakt </li> </a>
                            <a className="links" > <li> Villkor </li> </a>
                        </ul>
                    </Col>
                    <Col style={{ border: "2px solid black", margin: "4vh", textAlign: "left", color: "black" }} >
                        <h5 style={{ fontWeight: "bold" }} > Information</h5>
                        <p  >
                            fredrik@ullmanitconsulting.se
                            <br />
                            Julianas Gård 4, Göteborg
                            <br />
                            Godkänd för F-skatt
                        </p>
                    </Col>
                </Row>
            </div>
        </Fragment >
    )
}

export default Footer