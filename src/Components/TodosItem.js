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
        <h3 style={styling} > {props.itemName}</h3>
    )
}
export default TodosItem