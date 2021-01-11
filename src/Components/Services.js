import React, { Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'
import vegetationImage from '../Assets/vegetation-2.jpg'
import Header from './Header'
import '../index.css'
function AboutUs() {

    return (
        <Fragment>
            <Header headerText="Om Oss" image={vegetationImage} />
            <div style={{ textAlign: "center", margin: "10vh" }}  >
                <h4 >våra produkter</h4>
                <p> Vi erbjuder tre olika paket till riktigt bra priser.  </p>
            </div>
            <Row style={{ textAlign: "center", marginBottom: "10vh" }} >
                <Col>1</Col>
                <Col>2</Col>
                <Col>3</Col>
            </Row>



        </Fragment >
    )
}
export default AboutUs