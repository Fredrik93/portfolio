import React from 'react'
import CardItem from './CardItem'
import '../index.css'
function Card(props) {

    return (
        <div style={{ boxSizing: "border-box", float: "left", width: "33%", padding: "0 10px", marginTop: "5vh" }} id="cards" >
            <CardItem projectName={props.projectName} projectImg={props.projectImg} projectUrl={props.projectUrl} />
        </div>
    )
}
export default Card