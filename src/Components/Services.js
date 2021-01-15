import React, { Fragment } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
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
            <Container>
                <Row className="justify-content-center" >

                    <Col lg={4} md={12} sm={12} xs={12} >
                        <Prices
                            title="Basic"
                            price="3000:-"
                            information="Baspaketet. Detta är för dig som vill ha en rent 
                      informativ hemsida med till exempel en startsida, en meny och en Om Oss sida."
                            item1="Välj mellan ett 10 - tal mallar​"
                            item2="3 sidor till hemsidan"
                        />
                    </Col>
                    <Col lg={4} md={12} sm={12} xs={12} >
                        <Prices
                            title="Medium"
                            price="5000:-"
                            information="mediumpaketet. Detta är för dig som vill marknadsföra ditt företag och låta kunder kontakta dig genom hemsidan."
                        />
                    </Col>
                    <Col lg={4} md={12} sm={12} xs={12} >
                        <Prices
                            title="Pro"
                            price="10 000:-"
                            information="Propaketet. detta är för dig som vill erbjuda dina kunder en e-handels plattform att sälja dina produkter på eller beställa take-away mat."
                        />
                    </Col>

                </Row>
            </Container>

        </Fragment >
    )
}
export default AboutUs