import React from 'react'
import CardItem from './CardItem'
import '../index.css'
function Card(props) {

    return (
        <div style={{ boxSizing: "border-box", float: "left", width: "33%", padding: "0 10px", marginTop: "5vh" }} id="cards" >
            <CardItem
                projectName={props.projectName}
                projectImg={props.projectImg}
                //when you need to pass a url through props
                projectUrl={props.projectUrl}
                //when you have a local project
                projectLink={props.projectLink} />
        </div>
    )
}
export default Card