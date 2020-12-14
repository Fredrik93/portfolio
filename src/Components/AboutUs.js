import React, { Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'
import runningWater from '../Assets/running-water.jpg'
import '../index.css'
import Header from './Header'
function AboutUs() {

    return (
        <Fragment>
            <Header headerText="Om Oss" image={runningWater} />
            <Row  >
                <Col style={{ backgroundColor: "green", border: "2px solid black" }} xs={12} sm={12} md={6} lg={6} >Fredrik Ullman</Col>
                <Col style={{ backgroundColor: "green", border: "2px solid black" }} xs={12} sm={12} md={6} lg={6} >text </Col>
                <Col style={{ backgroundColor: "green", border: "2px solid black" }} xs={12} sm={12} md={6} lg={6} >Image</Col>


            </Row>
        </Fragment>
    )
}
export default AboutUs