import React, { Fragment } from 'react'
import vegetationImage from '../Assets/vegetation-1.jpg'
import '../index.css'
import { Link } from 'react-router-dom'
import Card from './Card'
function Home() {
    const startPageLayout = {
        position: "relative",
        textAlign: "center",
        color: "white"
    }
    const darkOverlay = {
        height: "90vh",
        width: "100%",
        background: "#1A6C7A",
        opacity: "95%",
        overflow: "hidden"
    }
    const homePageImage = {
        objectFit: "cover",
        opacity: "0.4",
        width: "100%",
        height: "90vh"
    }
    const centeredText = {
        position: "absolute",
        top: "40%",
        left: "50%",
        transform: "translate(-50%,-50%",
    }
    return (
        <Fragment>
            <div className="start-page-layout" >
                <header style={darkOverlay}>
                    <img style={homePageImage} alt="homepage-vegetation" src={vegetationImage} />
                    <section className="centered-text" style={centeredText}>
                        <h3> hemsidor | design </h3>
                        <h1 >Ullman IT Consulting</h1>
                        <p>Välkommen! Vi hjälper dig marknadsföra dig själv eller ditt <br /> företag med en hemsida. Kom igång idag!</p>
                        <Link to="/services"><button className="btn btn-lg " id="servicesBtn" >Tjänster</button></Link>
                        <Link to="/about-us"><button className="btn btn-lg" id="aboutUsBtn">Om Oss</button> </Link>
                    </section>
                </header>
            </div>
            <Card
                projectName="ullman"
                projectImg={vegetationImage}
            />
            <Card />
            <Card />
        </Fragment>
    )
}
export default Home