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
                            item3="Assistans med webbhotell"
                            item4="Assistans med domän"
                            item5="Uppdatering 45 min"
                            item6="1 Konsultimma"
                        />
                    </Col>
                    <Col lg={4} md={12} sm={12} xs={12} >
                        <Prices
                            title="Medium"
                            price="5000:-"
                            information="Mediumpaketet. Detta är för dig som vill marknadsföra ditt företag och låta kunder kontakta dig genom hemsidan."
                            item1="Välj mellan ett 10 - tal mallar​"
                            item2="4-5 sidor till hemsidan"
                            item3="Assistans med webbhotell"
                            item4="Assistans med domän"
                            item5="Personlig emailadress"
                            item6="Uppdatering 60 min"
                            item7="2 Konsultimmar"
                            item8="Support"
                        />
                    </Col>
                    <Col lg={4} md={12} sm={12} xs={12} >
                        <Prices
                            title="Pro"
                            price="10 000:-"
                            information="Propaketet. detta är för dig som vill erbjuda dina kunder en e-handels plattform att sälja dina produkter på eller beställa take-away mat."
                            item1="Välj mellan ett 10 - tal mallar​"
                            item2="5-6 sidor till hemsidan"
                            item3="Assistans med webbhotell"
                            item4="Assistans med domän"
                            item5="Personlig emailadress"
                            item6="Uppdatering 120 min"
                            item7="5 Konsultimmar"
                            item8="Support"
                        />
                    </Col>

                </Row>
            </Container>

        </Fragment >
    )
}
export default AboutUs