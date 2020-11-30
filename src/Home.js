import React, { Fragment } from 'react'
import vegetationImage from './Assets/vegetation-1.jpg'
import './App.css'
function Home() {
    const homePageImage = {
        objectFit: "cover",
        opacity: "0.6",
        width: "100%",
    }

    return (

        <Fragment>
            <div className="dark-overlay">
                <img style={homePageImage} src={vegetationImage} />
            </div>
        </Fragment>
    )
}
export default Home