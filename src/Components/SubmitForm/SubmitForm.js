import React from 'react'
import './SubmitForm.css'

export default class SubmitForm extends React.Component {
    render() {
        return (
            <div className="form">
                <form>
                    <input className="input" placeholder="Add Task" />
                    <button className="add-button" type="submit">Add</button>
                </form>
            </div>
        )
    }
}