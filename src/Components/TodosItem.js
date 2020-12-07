import React from 'react'

function TodosItem(props) {
    const styling = {
        textAlign: "left",
        background: "#eee",
        width: "30%",
        marginLeft: "auto",
        marginRight: "auto",
        display: "block"
    }
    return (
        <div>
            <h3 style={styling} > {props.itemName} <input type="checkbox" checked="true" onClick={() => { console.log(props.completed) }} /> </h3>
        </div>
    )
}
export default TodosItem