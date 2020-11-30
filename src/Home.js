import React, { Fragment } from 'react'
import vegetationImage from './Assets/vegetation-1.jpg'
function Home() {
    return (
        <Fragment>
            <img src={vegetationImage} />
            <h3> Home page</h3>
        </Fragment>
    )
}
export default Home