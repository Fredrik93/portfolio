import React, { Fragment } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import Header from './Header'
import '../Styles/Services.css'
import GranRis from '../Assets/granris.jpg'
import Barr from '../Assets/barr.jpg'
import BarrOnIce from '../Assets/is-på-barr.jpg'
function Services() {

    return (
        <Fragment>
            <Header headerText="Tjänster" image={GranRis} />
            <div style={{ textAlign: "center", margin: "10vh" }}  >
                <h4 >våra produkter</h4>
                <p> Vi erbjuder tre olika paket till riktigt bra priser.  </p>
            </div>
            <Container id="cards" >
                <Row className="justify-content-md-center" >
                    <Col xlg={4} lg={4} md={12} sm={12}  >
                        <Card id="card" >
                            <Card.Img id="image" src={GranRis} alt="price image " />
                            <Card.ImgOverlay>
                                <Card.Title id="title" > Basic 3000 :- </Card.Title>
                                <Card.Text>
                                    Baspaketet. Detta är för dig som vill ha en rent
                                    informativ hemsida med till exempel en startsida, en meny och en Om Oss sida.
                                </Card.Text>
                                <Card.Text >
                                    <ul id="list"  >
                                        <li> Välj mellan ett 10 - tal mallar​</li>
                                        <li> 3 sidor till hemsidan​</li>
                                        <li> Assistans med webbhotell​</li>
                                        <li> Assistans med domän​</li>
                                        <li> 1 Konsultimma​</li>
                                    </ul>
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col xlg={4} lg={4} md={12} sm={12}  >
                        <Card id="card" >
                            <Card.Img id="image" src={Barr} alt="price image " />
                            <Card.ImgOverlay>
                                <Card.Title id="title" >Medium 5000 :-</Card.Title>
                                <Card.Text>
                                    Mediumpaketet. Detta är för dig som vill marknadsföra ditt företag och låta kunder kontakta dig genom hemsidan med t.ex en galleri-sida.
                                </Card.Text>
                                <Card.Text>
                                    <ul id="list" >
                                        <li> Välj mellan ett 10 - tal mallar​</li>
                                        <li> 5-6 sidor till hemsidan​</li>
                                        <li> Assistans med webbhotell​</li>
                                        <li> Assistans med domän​</li>
                                        <li>Personlig emailadress</li>
                                        <li> 1 Konsultimma​</li>
                                        <li>Uppdatering 120 min</li>
                                        <li>3 Konsultimmar</li>
                                        <li>Support</li>
                                    </ul>
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col xlg={4} lg={4} md={12} sm={12}  >
                        <Card id="card" >
                            <Card.Img id="image" src={BarrOnIce} alt="price image " />
                            <Card.ImgOverlay>
                                <Card.Title id="title" > Pro 10 000 :- </Card.Title>
                                <Card.Text>
                                    Propaketet. Detta är för dig som vill erbjuda dina kunder en e-handels plattform att sälja dina produkter på eller beställa take-away mat.
                      </Card.Text>
                                <Card.Text >
                                    <ul id="list" >
                                        <li> Välj mellan ett 10 - tal mallar​</li>
                                        <li> 5-6 sidor till hemsidan</li>
                                        <li> Assistans med webbhotell​</li>
                                        <li> Assistans med domän​</li>
                                        <li>Personlig emailadress</li>
                                        <li> 1 Konsultimma​</li>
                                        <li>Uppdatering 120 min</li>
                                        <li>5 Konsultimmar</li>
                                        <li>Support</li>

                                    </ul>
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </Fragment >
    )
}
export default Services