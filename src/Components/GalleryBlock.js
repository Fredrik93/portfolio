import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Image1 from '../Assets/service3.jpg'
import VermontLighter from '../Assets/vermont-lighter.jpg'
import VermontLighter2 from '../Assets/vermont-lighter-2.jpg'
import Inthewoods from '../Assets/in-the-woods.jpg'
import paintRaspberry from '../Assets/paint_raspberry.jpg'
import waterfall from '../Assets/waterfall.jpg'
import Patrik from '../Assets/patrik.jpg'
import raspberry from '../Assets/raspberry.jpg'
import winter from '../Assets/winter.jpg'
import vegetation from '../Assets/vegetation-1.jpg'

class GalleryBlock extends React.Component {


    render() {
        const styleText = {
            textAlign: "center",
            marginTop: "10vh",
            marginBottom: "10vh"
        }
        const styleImages = {
            padding: "2vh"
        }
        const imgStyle = {
            height: "auto",
            padding: "1vh",
            width: "25%"
        }
        return (

            <div style={styleText} >
                <span style={{ display: "block" }} ><h3>Galleri</h3></span>
                <hr style={{ width: "20%", backgroundColor: "black" }} />
                <span>
                    <Container style={styleImages}  >
                        < img style={imgStyle} id="galleryImages" src={vegetation} alt="galleryimage" />
                        < img style={imgStyle} id="galleryImages" src={raspberry} alt="galleryimage" />
                        < img style={imgStyle} id="galleryImages" src={VermontLighter} alt="galleryimage" />
                        < img style={imgStyle} id="galleryImages" src={VermontLighter2} alt="galleryimage" />
                        < img style={imgStyle} id="galleryImages" src={Inthewoods} alt="galleryimage" />
                        < img style={imgStyle} id="galleryImages" src={paintRaspberry} alt="galleryimage" />
                        < img style={imgStyle} id="galleryImages" src={waterfall} alt="galleryimage" />
                        < img style={imgStyle} id="galleryImages" src={Patrik} alt="galleryimage" />
                    </Container>
                    <Link to="/under-maintenance">
                        <button
                            className="btn btn-lg "
                            id="historyBtn" > Till Galleri
                    </button>
                    </Link>

                </span>
            </div>
        )

    }
} export default GalleryBlock