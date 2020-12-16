import React, { Fragment } from 'react'
import { Col, Row } from 'react-bootstrap'
import runningWater from '../Assets/running-water.jpg'
import selfie from '../Assets/selfie.jpg'
import '../index.css'
import 'font-awesome/css/font-awesome.min.css';
import Header from './Header'
import cv from '../Assets/resume-2020.pdf'
function AboutUs() {

    return (
        <Fragment>
            <Header headerText="Om Oss" image={runningWater} />
            <Row style={{ marginTop: "10vh", }} >
                <Col style={{ fontSize: "3rem", textAlign: "center" }} xs={12} sm={12} md={6} lg={6} >Fredrik Ullman <hr style={{ backgroundColor: "black", width: "50%" }} /> </Col>
                <Col xs={12} sm={12} md={6} lg={6} > </Col>
                <Col style={{ textAlign: "center" }} xs={12} sm={12} md={6} lg={6} >
                    <img style={{ height: "auto", width: "60%", marginBottom: "2vh" }} src={selfie} alt="selfie" />
                    < br />
                    <a target="_blank" href="https://github.com/Fredrik93"> <i className="fa fa-github" style={{ fontSize: "3rem", marginLeft: "1vh", color: "black", marginBottom: "2vh" }}></i> </a>
                    <a target="_blank" href="https://www.linkedin.com/in/carl-fredrik-ullman-919645174/"  > <i className="fa fa-linkedin" style={{ fontSize: "3rem", marginLeft: "1vh", color: "black" }}></i> </a>
                    <a target="_blank" href={cv}  > <i className="fa fa-file" style={{ fontSize: "3rem", marginLeft: "1vh", color: "black" }}></i> </a>

                </Col>
                <Col id="about-text" style={{ textAlign: "left", paddingLeft: "10vh", paddingRight: "10vh" }} xs={12} sm={12} md={6} lg={6} >
                    <h4 style={{ fontWeight: "bold", marginBottom: "4vh" }} > Studying Software engineering and management at the University
                    of Gothenburg with 1+ years experience in programming,
                          web development and project management </h4>
                    <p>
                        I really enjoyed my six years in the service industry working as a bartender and sales clerk, but iv’e always had a dream of running my own business. Something was missing and i couldn’t put my finger on what it was.

                        I decided to take a 30 credit course in economics in 2018 and soon realized how much i value a university degree.</p>

                        What was missing was something to be passionate about, sure that there was motivation in offering the best service i could and improve my sales techniques but still felt like i needed something that allowed me to develop myself more.

                       <p>   I started studying IT two years ago and It’s been the most difficult, frustrating headache-prone experience I’ve ever encountered.

                    But it is also precisely what i wish to continue working with for the rest of my career, and life. For a neat website, a pretty algorithm or a well developed project-plan is that sense of fulfillment ive been searching for.</p>

                    <p> I’m convinced that with my competences and solid communication, you and I will be able to develop a great product that we both can take pride in!

                    Looking forward to hear from you!

                    </p>
                    <h4
                        style={{ fontWeight: "bold", marginTop: "4vh" }} >
                        Fredrik Ullman , Founder and Developer
                        </h4>
                </Col>



            </Row>
        </Fragment >
    )
}
export default AboutUs