import React, { Fragment } from 'react'
import vegetationImage from '../Assets/vegetation-1.jpg'
import '../index.css'
import Header from './Header'
function AboutUs() {
    const startPageLayout = {
        position: "relative",
        textAlign: "center",
        color: "white",

    }
    const darkOverlay = {
        height: "60vh",
        width: "100%",
        background: "#1A6C7A",
        opacity: "95%",
        overflow: "hidden"
    }
    const aboutUsImage = {
        objectFit: "cover",
        opacity: "0.4",
        width: "100%",
        height: "60vh"
    }
    const centeredText = {
        position: "absolute",
        top: "40%",
        left: "50%",
        transform: "translate(-50%,-50%",

    }
    return (
        <Fragment>
            <Header headerText="Om Oss" image={vegetationImage} />
        </Fragment>
    )
}
export default AboutUs