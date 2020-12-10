import React from 'react'
import { Container } from 'react-bootstrap'
import Image1 from '../Assets/in-the-woods.jpg'
import Image2 from '../Assets/service3.jpg'

const imageArray = [Image1, Image2]
class GalleryBlock extends React.Component {
    constructor() {
        super()
        this.displayImages = this.displayImages.bind(this)
    }

    displayImages() {
        imageArray.map((image) => {
            return console.log(image)
        })
    }

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
                        <img style={imgStyle} id="galleryImages" src={Image1} alt="galleryimage" />
                        <img style={imgStyle} id="galleryImages" src={Image2} alt="galleryimage" />
                        <img style={imgStyle} id="galleryImages" src={Image1} alt="galleryimage" />
                        <img style={imgStyle} id="galleryImages" src={Image1} alt="galleryimage" />
                        <img style={imgStyle} id="galleryImages" src={Image1} alt="galleryimage" />
                        <img style={imgStyle} id="galleryImages" src={Image1} alt="galleryimage" />
                        <img style={imgStyle} id="galleryImages" src={Image1} alt="galleryimage" />
                        {this.displayImages()}

                    </Container>

                </span>
            </div>
        )

    }
} export default GalleryBlock