import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import '../index.css'
function Header(props) {
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

            <div style={startPageLayout} >
                <header style={darkOverlay}>
                    <img style={aboutUsImage} alt="homepage-vegetation" src={props.image} />
                    <section style={centeredText}>
                        <h3> {props.headerText}  </h3>
                        <h4> {props.detailedInfoAboutComponent}</h4>
                        {props.buttonLabel ?
                            <Link to="/"><button
                                className="btn btn-lg "
                                style={{ marginTop: "5vh" }}
                                id="servicesBtn" >{props.buttonLabel}</button></Link>
                            : null
                        }
                    </section>

                </header>
            </div>
        </Fragment>
    )
}

export default Header