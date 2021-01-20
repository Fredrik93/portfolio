import React from 'react'
import './Prices.css'

function Prices(props) {
    const darkOverlay = {


        background: "#1A6C7A",
        opacity: "95%",


    }
    return (
        <div>
            <img src={props.image} id="container" />
            <div id="price-card" className="price-card" >

                <div id="price-text" >


                    <h3>  {props.title} {props.price} </h3>
                    < br />
                    {props.information}
                    <br />
                    <ul id="items" >
                        <li>{props.item1}</li>
                        <li>{props.item2}</li>
                        <li>{props.item3}</li>
                        <li>{props.item4}</li>
                        <li>{props.item5}</li>
                        <li>{props.item6}</li>
                        <li>{props.item7}</li>
                        <li>{props.item8}</li>
                    </ul>

                </div>
            </div>
        </div>
    )
} export default Prices