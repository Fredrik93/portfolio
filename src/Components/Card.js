import React from 'react'
import CardItem from './CardItem'

function Card(props) {

    return (
        <div style={{ boxSizing: "border-box", float: "left", width: "33%", padding: "0 10px", marginTop: "5vh" }} >

            <CardItem projectName={props.projectName} projectImg={props.projectImg} />
        </div>
    )
}
export default Card