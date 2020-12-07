import React from 'react'
import Header from './Header'
import TodosItem from './TodosItem'
import data from './todosData'
import { Button } from 'react-bootstrap'
export class Todos extends React.Component {
    constructor() {
        super()
        this.state = {
            completed: '',
            todos: data
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(id) {

        this.setState((prevState) => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }
    render() {

        const dataItems = data.map((choreItem) => {

            return <TodosItem
                key={choreItem.id}
                choreItem={choreItem}
                handleChange={this.handleChange} />
        })
        return (
            <div >
                <Header headerText="Todos Component" />
                < br />
                {dataItems}
                <div style={{ textAlign: "center" }} >
                    <Button variant="success" onClick={() => { console.log("Wash dishes") }} > Add task</Button>
                </div>
            </div>
        )
    }
}