import React, { Fragment } from 'react'
import vegetationImage from './Assets/vegetation-1.jpg'
import './Styles/Home.css'
function Home() {

    return (

        <Fragment>
            <div className="start-page-layout" >
                <header className="dark-overlay">
                    <img className="homepage-image" alt="homepage-vegetation" src={vegetationImage} />
                    <section className="centered-text">
                        <h3> hemsidor | design </h3>
                        <h1 >Ullman IT Consulting</h1>
                        <p>Välkommen! Vi hjälper dig marknadsföra dig själv eller ditt <br /> företag med en hemsida. Kom igång idag!</p>
                        <button className="btn btn-lg " id="servicesBtn" > Tjänster</button>
                        <button className="btn btn-lg" id="aboutUsBtn" > Om Oss</button>

                    </section>

                </header>
            </div>

        </Fragment>
    )
}
export default Home