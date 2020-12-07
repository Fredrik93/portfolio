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
            <span style={styling} >
                {props.choreItem.name}
                <input type="checkbox"
                    checked={props.choreItem.completed}
                    onChange={() => { props.handleChange(props.choreItem.id) }} /> </span>
        </div>
    )
}
export default TodosItem