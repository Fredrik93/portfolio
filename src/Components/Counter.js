import React from 'react'
import { Button, Container } from 'react-bootstrap'
import Header from './Header'

class Counter extends React.Component {
    constructor() {
        super()
        this.state = {
            counter: 0
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange() {
        this.setState(previousState => {
            return {
                counter: previousState.counter + 1

            }
        })
    }
    render() {
        return (
            <div>
                <Header headerText="Counter component" />
                < br />
                <div style={{ textAlign: "center" }} >
                    <h1 > {this.state.counter} </h1>
                    <Button variant="success" onClick={this.handleChange} >Add number</Button>
                </div>
            </div>
        )
    }
}
export default Counter