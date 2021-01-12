import React, { Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'
import vegetationImage from '../Assets/vegetation-2.jpg'
import Header from './Header'
import '../index.css'
import Prices from './Prices'
function AboutUs(props) {

    return (
        <Fragment>
            <Header headerText="Om Oss" image={vegetationImage} />
            <div style={{ textAlign: "center", margin: "10vh" }}  >
                <h4 >våra produkter</h4>
                <p> Vi erbjuder tre olika paket till riktigt bra priser.  </p>
            </div>
            <Row style={{ textAlign: "center", marginBottom: "10vh" }} >

                <Col >
                    <Prices
                        title="Basic"
                        price="3000:-"
                        information="Baspaketet. Detta är för dig som vill ha en rent 
                      informativ hemsida med till exempel en startsida, en meny och en Om Oss sida."
                        item1="Välj mellan ett 10 - tal mallar​"
                        item2="3 sidor till hemsidan"
                    />
                </Col>
                <Col>2</Col>
                <Col>3</Col>

            </Row>



        </Fragment >
    )
}
export default AboutUs