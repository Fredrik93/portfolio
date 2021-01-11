import React, { Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'
import vegetationImage from '../Assets/vegetation-2.jpg'
import Header from './Header'
import '../index.css'
function AboutUs() {

    return (
        <Fragment>
            <Header headerText="Om Oss" image={vegetationImage} />
            <h4 style={{ textAlign: "center" }} >hi</h4>

            <Row style={{ textAlign: "center" }} >
                <Col>1</Col>
                <Col>2</Col>
                <Col>3</Col>
            </Row>



        </Fragment >
    )
}
export default AboutUs