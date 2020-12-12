import React from 'react'
import logo from '../Assets/logo.png'

function Footer() {
    const footerStyle = {
        height: "20vh",
        backgroundColor: "lightgray",
        display: "flex",



    }
    return (

        <div style={footerStyle}>
            <span>
                <img style={{ height: "auto", width: "20vh", marginLeft: "30vh", marginTop: "3vh" }} src={logo} />
            </span>
            <span style={{ marginLeft: "30vh", marginTop: "3vh" }} >

                <ul style={{ listStyleType: "none" }} >
                    <p style={{ fontWeight: "bold" }} >Snabblänkar</p>
                    <li>Hem</li>
                    <li>Tjänster</li>
                    <li>Om Oss</li>
                    <li>Kontakt</li>

                </ul>

            </span>
            <span style={{ marginLeft: "30vh", marginTop: "3vh" }} >
                <p style={{ fontWeight: "bold" }} >Information</p>

            </span>
        </div >
    )
} export default Footer