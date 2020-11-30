import React from 'react'
import '../Styles/AboutUs.css'
import waterfallImage from '../Assets/waterfall.jpg'
function AboutUs() {
    return (
        <div className="start-page-layout" >
            <header className="dark-overlay">
                <img className="homepage-image" alt="homepage-vegetation" src={waterfallImage} />
                <section className="centered-text">
                    <h1> Om Oss </h1>
                </section>

            </header>
        </div>

    )
}
export default AboutUs