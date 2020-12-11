import React, { Fragment } from 'react'
import vegetationImage from '../Assets/vegetation-1.jpg'
import '../index.css'
import Header from './Header'
function AboutUs() {

    return (
        <Fragment>
            <Header headerText="Om Oss" image={vegetationImage} />
        </Fragment>
    )
}
export default AboutUs