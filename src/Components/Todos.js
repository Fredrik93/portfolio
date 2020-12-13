import React from 'react'
import Header from './Header'
import TodosItem from './TodosItem'
import data from './todosData'
import { Button } from 'react-bootstrap'
import vegetationImage from '../Assets/vegetation-1.jpg'
import SubmitForm from './SubmitForm/SubmitForm'

export class Todos extends React.Component {
    render() {
        return (
            <div >
                <Header headerText="Todos app" image={vegetationImage} />
                <SubmitForm />
            </div>
        )
    }
}
