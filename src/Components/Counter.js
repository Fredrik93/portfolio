import React from 'react'
import { Button, Container } from 'react-bootstrap'
import Header from './Header'
import Confetti from 'react-confetti'
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
                {this.state.counter > 10 ? <Header
                    headerText="You clicked the silly counter 10 times, heres confetti to reward your hard work!"
                    detailedInfoAboutComponent="A counter that displays the use of state in react"
                /> :
                    <Header headerText="Counter component"
                        detailedInfoAboutComponent="A counter that displays the use of state in react"
                    />}
                {this.state.counter > 10 ? <Confetti /> : null}
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