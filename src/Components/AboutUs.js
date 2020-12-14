import React, { Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'
import runningWater from '../Assets/running-water.jpg'
import selfie from '../Assets/selfie.jpg'
import '../index.css'
import Header from './Header'
function AboutUs() {

    return (
        <Fragment>
            <Header headerText="Om Oss" image={runningWater} />
            <Row  >
                <Col style={{ backgroundColor: "green", border: "2px solid black" }} xs={12} sm={12} md={6} lg={6} >Fredrik Ullman <hr ></hr> </Col>
                <Col style={{ backgroundColor: "green", border: "2px solid black" }} xs={12} sm={12} md={6} lg={6} >text </Col>
                <Col style={{ backgroundColor: "green", border: "2px solid black", }} xs={12} sm={12} md={6} lg={6} >
                    <img style={{ height: "auto", width: "100%" }} src={selfie} alt="selfie" />
                </Col>


            </Row>
        </Fragment>
    )
}
export default AboutUs