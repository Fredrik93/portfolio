import React from 'react'
import Header from './Header'
import vegetationImage from '../Assets/vegetation-1.jpg'
import SubmitForm from './SubmitForm/SubmitForm'
import TasksList from './TasksList/TasksList'

export class Todos extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tasks: []
        }
        this.addTask = this.addTask.bind(this)
        this.removeTask = this.removeTask.bind(this)
    }
    addTask(task) {
        this.setState((prevState) => {
            return {
                tasks: prevState.tasks.concat(task)
            }
        })
    }
    render() {
        return (
            <div className="Todos" >
                <Header headerText="Todos app" image={vegetationImage} />
                <SubmitForm />
                <TasksList tasks={this.state.tasks} removeTask={this.removeTask} />
            </div>
        )
    }
}
