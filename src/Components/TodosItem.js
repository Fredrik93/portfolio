import React from 'react'

function TodosItem(props) {
    const styling = {
        textAlign: "left",
        background: "#eee",
        width: "30%",
        marginLeft: "auto",
        marginRight: "auto",
        display: "block",
        padding: "1vh"
    }
    return (
        <div>
            <h3 style={styling} >
                {props.choreItem.name}
                <input
                    style={{ marginTop: "2vh", float: "right" }}
                    type="checkbox"
                    checked={props.choreItem.completed}
                    onChange={() => { props.handleChange(props.choreItem.id) }} /> </h3>
        </div>
    )
}
export default TodosItem