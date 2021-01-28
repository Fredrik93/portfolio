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
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                            </Card.ImgOverlay>
                        </Card>
                    </Col>
                    <Col xlg={4} lg={4} md={12} sm={12} >
                        <Card id="card" >
                            <Card.Img id="image" src={GranRis} alt="price image " />
                        </Card>
                    </Col>
                    <Col xlg={4} lg={4} md={12} sm={12}>
                        <Card id="card" >
                            <Card.Img id="image" src={GranRis} alt="price image " />
                        </Card>
                    </Col>


                </Row>
            </Container>

        </Fragment >
    )
}
export default Services