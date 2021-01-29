import React, { Fragment } from 'react'
import { Card, CardDeck, Col, Container, Row } from 'react-bootstrap'
import Header from './Header'
import '../Styles/Services.css'
import GranRis from '../Assets/granris.jpg'
import Barr from '../Assets/barr.jpg'
import BarrOnIce from '../Assets/is-på-barr.jpg'
import Prices from '../Styles/Services.css'
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
                                <Card.Title> Basic 3000 :- </Card.Title>
                                <Card.Text>
                                    Baspaketet. Detta är för dig som vill ha en rent
                                    informativ hemsida med till exempel en startsida, en meny och en Om Oss sida.
                                </Card.Text>
                                <Card.Text id="list" >
                                    <ul>
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
                                <Card.Title>Medium 5000 :-</Card.Title>
                                <Card.Text>
                                    Mediumpaketet. Detta är för dig som vill marknadsföra ditt företag och låta kunder kontakta dig genom hemsidan med t.ex en galleri-sida.
                                    
                                </Card.Text>
                                <Card.Text id="list" >
                                    <ul>
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
                            <Card.Img id="image" src={GranRis} alt="price image " />
                            <Card.ImgOverlay>
                                <Card.Title> Pro 10 000 :- </Card.Title>
                                <Card.Text>
                                    Propaketet. Detta är för dig som vill erbjuda dina kunder en e-handels plattform att sälja dina produkter på eller beställa take-away mat.
                      </Card.Text>
                                <Card.Text id="list" >
                                    <ul>
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
            {/* <Container id="container-card">
                <Row  >
                    <Col lg={4} md={12} sm={12} xs={12} >
                        <Card id="card">
                            <Card.Img id="image" src={GranRis} alt="Card image" />
                            <Card.ImgOverlay >
                                <Card.Title> Basic 3000 :- </Card.Title>
                                <Card.Text>
                                    Baspaketet. Detta är för dig som vill ha en rent
                                    informativ hemsida med till exempel en startsida, en meny och en Om Oss sida.
                      </Card.Text>
                                <Card.Text>
                                    <Card.Text>
                                        <ul>
                                            <li> Välj mellan ett 10 - tal mallar​</li>
                                            <li> 3 sidor till hemsidan​</li>
                                            <li> Assistans med webbhotell​</li>
                                            <li> Assistans med domän​</li>
                                            <li> 1 Konsultimma​</li>
                                        </ul>
                                    </Card.Text>
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col lg={4} md={12} sm={12} xs={12} >
                        <Card id="card" className="bg-dark text-white">
                            <Card.Img id="image" src={Barr} alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title>Medium 5000 :-</Card.Title>
                                <Card.Text>
                                    Mediumpaketet. Detta är för dig som vill marknadsföra ditt företag och låta kunder kontakta dig genom hemsidan.
                      </Card.Text>
                                <Card.Text>   <ul>
                                    <li> Välj mellan ett 10 - tal mallar​</li>
                                    <li> 5-6 sidor till hemsidan​</li>
                                    <li> Assistans med webbhotell​</li>
                                    <li> Assistans med domän​</li>
                                    <li>Personlig emailadress</li>
                                    <li> 1 Konsultimma​</li>
                                    <li>Uppdatering 120 min</li>
                                    <li>3 Konsultimmar</li>
                                    <li>Support</li>
                                </ul></Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col lg={4} md={12} sm={12} xs={12} >
                        <Card id="card" className="bg-dark text-white">
                            <Card.Img id="image" src={BarrOnIce} alt="Card image" />
                            <Card.ImgOverlay>
                                <Card.Title>Pro 10 000 :-</Card.Title>
                                <Card.Text>
                                    Propaketet. Detta är för dig som vill erbjuda dina kunder en e-handels plattform att sälja dina produkter på eller beställa take-away mat.
                      </Card.Text>
                                <Card.Text>   <ul>
                                    <li> Välj mellan ett 10 - tal mallar​</li>
                                    <li> 3 sidor till hemsidan​</li>
                                    <li> Assistans med webbhotell​</li>
                                    <li> Assistans med domän​</li>
                                    <li> 1 Konsultimma​</li>
                                </ul></Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                </Row>
            </Container> */}

            {/* 
            <Container>
                <Row className="justify-content-center" >

                    <Col lg={4} md={12} sm={12} xs={12} >
                        <Prices
                            image={GranRis}
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
                            image={Barr}
                            title="Medium"
                            price="5000:-"
                            information="Mediumpaketet. Detta är för dig som vill marknadsföra ditt företag och låta kunder kontakta dig genom hemsidan."
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
                    <Col lg={4} md={12} sm={12} xs={12} >
                        <Prices
                            image={BarrOnIce}
                            title="Pro"
                            price="10 000:-"
                            information="Propaketet. Detta är för dig som vill erbjuda dina kunder en e-handels plattform att sälja dina produkter på eller beställa take-away mat."
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
            </Container> */}

        </Fragment >
    )
}
export default Services