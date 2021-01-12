import React, { Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'
import vegetationImage from '../Assets/vegetation-2.jpg'
import Header from './Header'
import '../index.css'
import Prices from './Prices/Prices'
function AboutUs() {

    return (
        <Fragment>
            <Header headerText="Om Oss" image={vegetationImage} />
            <div style={{ textAlign: "center", margin: "10vh" }}  >
                <h4 >våra produkter</h4>
                <p> Vi erbjuder tre olika paket till riktigt bra priser.  </p>
            </div>
            <Row  >
                <Col className="d-flex justify-content-center" lg={4} md={12} sm={12} xs={12} >
                    <Prices
                        title="Basic"
                        price="3000:-"
                        information="Baspaketet. Detta är för dig som vill ha en rent 
                      informativ hemsida med till exempel en startsida, en meny och en Om Oss sida."
                        item1="Välj mellan ett 10 - tal mallar​"
                        item2="3 sidor till hemsidan"
                    />
                </Col>
                <Col className="d-flex justify-content-center" lg={4} md={12} sm={12} xs={12} >
                    <Prices
                        title="Medium"
                        price="3000:-"
                        information="Baspaketet. Detta är för dig som vill ha en rent 
                      informativ hemsida med till exempel en startsida, en meny och en Om Oss sida."
                        item1="Välj mellan ett 10 - tal mallar​"
                        item2="3 sidor till hemsidan"
                    />
                </Col>
                <Col className="d-flex justify-content-center" lg={4} md={12} sm={12} xs={12} >
                    <Prices
                        title="Professional"
                        price="3000:-"
                        information="Baspaketet. Detta är för dig som vill ha en rent 
                      informativ hemsida med till exempel en startsida, en meny och en Om Oss sida."
                        item1="Välj mellan ett 10 - tal mallar​"
                        item2="3 sidor till hemsidan"
                    />
                </Col>

            </Row>



        </Fragment >
    )
}
export default AboutUs