import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import logo from '../Assets/logo.png'

function Footer() {
    const footerStyle = {
        height: "20vh",
        backgroundColor: "lightgray",
        display: "flex",
        textAlign: "center",
    }
    return (

        <Container >
            <Row>
                <Col
                    lg={true} ><img style={{ width: "20vh" }} src={logo} />
                </Col>
                <Col
                    lg={true} > <ul style={{ listStyleType: "none" }} >
                        <p style={{ fontWeight: "bold" }} >Snabblänkar</p>
                        <li>Hem</li>
                        <li>Tjänster</li>
                        <li>Om Oss</li>
                        <li>Kontakt</li>
                    </ul>
                </Col>
                <Col lg={true} >
                    <p style={{ fontWeight: "bold" }} >Information</p>
                </Col>
            </Row>
        </Container>
        // <div style={footerStyle} className="footer" >
        //     <span>
        //         <img style={{ height: "auto", width: "20vh", marginLeft: "30vh", marginTop: "3vh" }} src={logo} />
        //     </span>
        //     <span style={{ marginLeft: "30vh", marginTop: "3vh" }} >

        //         <ul style={{ listStyleType: "none" }} >
        //             <p style={{ fontWeight: "bold" }} >Snabblänkar</p>
        //             <li>Hem</li>
        //             <li>Tjänster</li>
        //             <li>Om Oss</li>
        //             <li>Kontakt</li>
        //         </ul>
        //     </span>
        //     <span style={{ marginLeft: "30vh", marginTop: "3vh" }} >
        //         <p style={{ fontWeight: "bold" }} >Information</p>

        //     </span>
        // </div >
    )
} export default Footer