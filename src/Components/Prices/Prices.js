import React from 'react'
import './Prices.css'

function Prices(props) {
    return (
        <div id="price-card" >

            <div id="price-text" >
                <h3>  {props.title} {props.price} </h3>
                < br />
                {props.information}
                <br />
                <ul>
                    <li>{props.item1}</li>
                    <li>{props.item2}</li>
                </ul>
            </div>
        </div>
    )
} export default Prices