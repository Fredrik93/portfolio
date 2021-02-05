import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logo from '../Assets/logo.png'
import '../index.css'
import '../Styles/Footer.css'
import cv from '../Assets/resume-2020.pdf'
function Footer(props) {
    const startPageLayout = {
        position: "relative",
        // textAlign: "center",
        // color: "white",
        // marginTop: "2vh",
        // display: "flex",
        // justifyContent: "center",
    }
    return (
        <div className="footer" >
            <Row  >
                <Col style={{ border: "2px solid black" }} xs={12} sm={12} md={12} lg={4} >
                    1
                     </Col>
                <Col style={{ border: "2px solid black" }} xs={12} sm={12} md={12} lg={4} >
                    2
                     </Col>
                <Col style={{ border: "2px solid black" }} xs={12} sm={12} md={12} lg={4} >3</Col>
            </Row>
        </div>
        // <Fragment >
        //     <div id="container" >
        //         <Row  >
        //             <Col style={{ border: "2px solid black" }} xs={12} sm={12} md={12} lg={4} >
        //                 1
        //             </Col>
        //             <Col style={{ border: "2px solid black" }} xs={12} sm={12} md={12} lg={4} >
        //                 2
        //             </Col>
        //             <Col style={{ border: "2px solid black" }} xs={12} sm={12} md={12} lg={4} >3</Col>
        //         </Row>
        //     </div>
        // </Fragment>
        // <Fragment>

        //     <div style={startPageLayout} >
        //         <Row style={{ backgroundColor: "#eee" }}>
        //             <Col xs={12} sm={12} md={12} lg={4} style={{ marginTop: "4vh" }} >
        //                 <img style={{ marginBottom: "1vh" }} src={logo} alt="uiclogo" />
        //                 < br />
        //                 <a id="icons" target="_blank" rel="noreferrer" href="https://github.com/Fredrik93"> <i className="fa fa-github" ></i> </a>
        //                 <a id="icons" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/carl-fredrik-ullman-919645174/"  > <i className="fa fa-linkedin" ></i> </a>
        //                 <a id="icons" target="_blank" rel="noreferrer" href="https://www.instagram.com/ullmanitconsulting/"  > <i className="fa fa-instagram" ></i> </a>
        //                 <a id="icons" target="_blank" rel="noreferrer" href={cv}  > <i className="fa fa-file"></i> </a>

        //             </Col>
        //             <Col xs={12} sm={12} md={6} lg={4} >
        //                 <h5 style={{ color: "black", marginTop: "4vh", fontWeight: "bold" }} > Snabblänkar </h5>
        //                 <a className="links" href="/services" > <li> Tjänster </li> </a>
        //                 <a className="links" href="/about-us" > <li> Om oss </li> </a>
        //                 <a className="links" href="/" > <li> Kontakt </li> </a>
        //                 <a className="links" href="/" > <li> Villkor </li> </a>
        //             </Col>
        //             <Col xs={12} sm={12} md={6} lg={4} id="footer-links" style={{ textAlign: "left", color: "black", marginTop: "4vh" }} >
        //                 <h5 style={{ fontWeight: "bold" }} > Information</h5>
        //                 <p  >
        //                     fredrik@ullmanitconsulting.se
        //                     <br />
        //                     Julianas Gård 4, Göteborg
        //                     <br />
        //                     Godkänd för F-skatt
        //                 </p>

        //             </Col>
        //             <Col sm={12} md={12} lg={12} xlg={12} > <hr style={{ backgroundColor: "lightgray", width: "70%" }} /> </Col>
        //             <Col style={{ color: "black", textAlign: "right" }} >
        //                 Copyright UllmanITConsulting</Col>
        //             <Col style={{ color: "black", textAlign: "left" }} >
        //                 Updated February 2021
        //             </Col>
        //         </Row>
        //     </div>
        // </Fragment >
    )
}

export default Footer