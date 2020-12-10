import React from 'react'
import { Container } from 'react-bootstrap'
import Image1 from '../Assets/in-the-woods.jpg'
function displayImages() {
    console.log("working")

}

function GalleryBlock(props) {
    const styleText = {
        textAlign: "center",
        marginTop: "10vh",
        marginBottom: "10vh"
    }

    return (

        <div style={styleText} >
            <span style={{ display: "block" }} ><h3>Galleri</h3></span>
            <hr style={{ width: "20%", backgroundColor: "black" }} />
            <span>
                <Container>
                    <img src={Image1} alt="galleryimage" />
                    {displayImages()}
                </Container>

            </span>
        </div>
    )

} export default GalleryBlock