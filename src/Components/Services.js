import React from 'react'
import Confetti from 'react-confetti'
import waterfallImage from '../Assets/waterfall.jpg'
function Services() {

    return (
        <div className="start-page-layout" >
            <header className="dark-overlay">
                <img className="homepage-image" alt="homepage-vegetation" src={waterfallImage} />
                <section className="centered-text">
                    <h2>Services offered page < br /> (keeping the confetti for a while because its pretty awesome)</h2>
                </section>
            </header>
            <Confetti />
        </div>

    )
}


export default Services