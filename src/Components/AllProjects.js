import React from 'react'

import vegetationImage from '../Assets/vegetation-1.jpg'
import uicHomePage from '../Assets/screenshot-homepage.png'
import agnartHomePage from '../Assets/agnart-screenshot.png'
import JomiolaHomePage from '../Assets/jomiola-screenshot.png'
import inTheWoods from '../Assets/in-the-woods.jpg'
import defaultImage from '../Assets/service3.jpg'
import clock from '../Assets/clock.jpeg'
import Card from './Card'

class AllProjects extends React.Component{
    render(){
        return(
            <div style={{ marginTop: "10vh" }} >
            <h3 style={{ textAlign: "center" }} >Projekt</h3>
            <hr style={{ width: "20%", backgroundColor: "black" }} />

            <Card
                projectName="UIC"
                projectImg={uicHomePage}
                projectUrl="http://ullmanitconsulting.se"
            />
            <Card
                projectName="agnart"
                projectImg={agnartHomePage}
                projectUrl="http://agnart.se"
            />
            <Card
                projectName="jomiola"
                projectImg={JomiolaHomePage}
                projectUrl="http://jomiola.se"
            />
            <Card
                projectName="Counter"
                projectImg={defaultImage}
                projectUrl="/counter"
            />
            <Card
                projectName="Todos List"
                projectImg={defaultImage}
                projectUrl="/todos"
            />
            <Card
                projectName="Productivity timer"
                projectImg={clock}
                projectUrl="/timer"
            />
             <Card
                projectName="A second timer for practice"
                projectImg={defaultImage}
                projectUrl="/secondCounter"
            />
        </div>
        )
    }
}
export default AllProjects