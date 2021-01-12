import React from 'react'
import './Prices.css'

function Prices(props) {
    return (
        <div id="price-card" >
            <h3>  {props.title} {props.price} </h3>
            < br />
            {props.information}
            <br />
            <ul>
                <li>{props.item1}</li>
                <li>{props.item2}</li>
            </ul>

        </div>
    )
} export default Prices