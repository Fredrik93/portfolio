import React from 'react'
import Header from '../Header'
import clock from '../../Assets/clock.jpeg'
import { Button } from 'react-bootstrap'

class Timer extends React.Component {
    constructor() {
        super()
        this.state = {
            timer: 25
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange() {
        this.setState({ timer: 10 })
    }

    render() {
        return (
            <div>
                <Header image={clock} headerText="Productivity Timer" />
                <form style={{ textAlign: "center", marginTop: "4vh", marginBottom: "4vh" }} >
                    <h3 > {this.state.timer} </h3>
                    <Button style={{ margin: "2vh" }} variant="success" onClick={this.handleChange} > Start Timer </Button>
                    < br />
                    <Button variant="danger" onClick={() => { this.setState({ timer: 25 }) }} > Restart </Button>

                </form>
            </div>
        )
    }
} export default Timer