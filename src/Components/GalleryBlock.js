import React from 'react'
import { Container } from 'react-bootstrap'
import Image1 from '../Assets/in-the-woods.jpg'
import Image2 from '../Assets/service3.jpg'

const imageArray = [Image1, Image2]
class GalleryBlock extends React.Component {

    randomizeImages() {
        const imgStyle = {
            height: "auto",
            padding: "1vh",
            width: "25%"
        }
        let rand = 1
        return < img style={imgStyle} id="galleryImages" src={imageArray[rand]} alt="galleryimage" />
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
                        {this.randomizeImages()}
                    </Container>

                </span>
            </div>
        )

    }
} export default GalleryBlock