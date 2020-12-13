import React from 'react'
import './TasksList.css'
import Task from '../Task/Task'

export default class TasksList extends React.Component {
    render() {
        return (
            <div className="tasks-list-container" >
                <div className="tasks-list" >
                    {this.props.map(task => <Task key={task.key} text={task.text} id={task.id} removeTask={this.props.removeTask} />)}
                </div>
            </div>
        )
    }
}