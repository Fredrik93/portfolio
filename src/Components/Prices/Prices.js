import React from 'react'
import './Prices.css'

function Prices(props) {

    return (
        <div>
            <img src={props.image} id="container" alt="images-behind-pricing" />


            <div id="price-text" >
                <h3 id="title" >  {props.title} {props.price} </h3>
                < br />
                < br />
                <div id="information" >
                    {props.information}
                </div>

                <br />
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
    )
} export default Prices