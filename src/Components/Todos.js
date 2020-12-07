import React from 'react'
import Header from './Header'
import TodosItem from './TodosItem'
import data from './todosData'
export class Todos extends React.Component {
    constructor() {
        super()
        this.state = {
        }
    }
    render() {

        const dataItems = data.map((item) => {
            console.log(item.completed)
            return <TodosItem itemName={item.name} key={item.id} />
        })
        return (
            <div >
                <Header headerText="Todos Component" />
                < br />
                {dataItems}
            </div>
        )
    }
}