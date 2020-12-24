import React, { Fragment } from 'react'
import vegetationImage from '../Assets/vegetation-1.jpg'
import uicHomePage from '../Assets/screenshot-homepage.png'
import agnartHomePage from '../Assets/agnart-screenshot.png'
import JomiolaHomePage from '../Assets/jomiola-screenshot.png'
import inTheWoods from '../Assets/in-the-woods.jpg'
import defaultImage from '../Assets/service3.jpg'
import clock from '../Assets/clock.jpeg'
import '../index.css'
import { Link } from 'react-router-dom'
import Card from './Card'
import TextBlock from './TextBlock'
import ImageBlock from './ImageBlock'
import GalleryBlock from './GalleryBlock'

function Home() {

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
        <Fragment >
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
            <div style={{ marginTop: "10vh" }} >
                <h3 style={{ textAlign: "center" }} >Projekt</h3>
                <hr style={{ width: "20%", backgroundColor: "black" }} />

                <Card
                    projectName="UIC"
                    projectImg={uicHomePage}
                    projectUrl="http://ullmanitconsulting.se"
                />
                <Card
                    projectName="agnart"
                    projectImg={agnartHomePage}
                    projectUrl="http://agnart.se"
                />
                <Card
                    projectName="jomiola"
                    projectImg={JomiolaHomePage}
                    projectUrl="http://jomiola.se"
                />
                <Card
                    projectName="Counter"
                    projectImg={defaultImage}
                    projectUrl="/counter"
                />
                <Card
                    projectName="Todos List"
                    projectImg={defaultImage}
                    projectUrl="/todos"
                />
                <Card
                    projectName="Productivity timer"
                    projectImg={clock}
                    projectUrl="/timer"
                />
            </div>
            <div style={{
                textAlign: "center",
                marginTop: "3vh",
                marginBottom: "10vh"
            }} >
                <Link to="/under-maintenance"  >
                    <button
                        className="btn btn-lg "
                        id="historyBtn" >Alla projekt
                </button>
                </Link>
            </div>
            <hr style={{ width: "20%", backgroundColor: "black" }} />

            <TextBlock
                title="Hemsidor för ditt företag"
                text="Har du ett företag, 
            funderar ni på att få bättre exponering på era produkter eller kanske vill driva en blogg ? En hemsida hjälper dig att nå dina mål ! Kika gärna på vår
             historia och läs mer om oss som studentkonsulter. "
                link="/under-maintenance"
                buttonLabel="VÅR HISTORIA"
            />
            <ImageBlock
                title="Ta Steget!"
                text="Vi erbjuder en produkt till ett riktigt bra pris"
                buttonLabel="KONTAKT"
                link="/under-maintenance"
                image={inTheWoods}
            />
            <GalleryBlock />
        </Fragment>
    )
}
export default Home