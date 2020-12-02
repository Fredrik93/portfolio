import React from 'react'
import CardItem from './CardItem'

function Card(props) {

    return (
        <div style={{ boxSizing: "border-box", float: "left", width: "25%", padding: "0 10px", }} >

            <CardItem projectName={props.projectName} />
        </div>
    )
}
export default Card