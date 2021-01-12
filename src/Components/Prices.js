import React from 'react'

function Prices(props) {
    return (
        <div>
            {props.title} {props.price}
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