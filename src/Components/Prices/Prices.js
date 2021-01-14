import React from 'react'
import './Prices.css'

function Prices(props) {
    const darkOverlay = {


        background: "#1A6C7A",
        opacity: "95%",


    }
    return (
        <div id="price-card" className="price-card" >
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