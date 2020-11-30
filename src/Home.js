import React, { Fragment } from 'react'
import vegetationImage from './Assets/vegetation-1.jpg'
import './App.css'
function Home() {
    const homePageImage = {
        objectFit: "cover",
        opacity: "0.4",
        width: "100%",
    }

    return (

        <Fragment>
            <div className="start-page-image" >
                <header className="dark-overlay">
                    <img style={homePageImage} alt="homepage-vegetation" src={vegetationImage} />
                    <section className="centered-text">
                        <h3> hemsidor | design </h3>
                        <h1 >Ullman IT Consulting</h1>
                        <p>Välkommen! Vi hjälper dig marknadsföra dig själv eller ditt företag med en hemsida. Kom igång idag!</p>
                        <button className="btn btn-success" > Tjänster</button>
                        <button className="btn btn-success" > Om Oss</button>

                    </section>

                </header>
            </div>

        </Fragment>
    )
}
export default Home