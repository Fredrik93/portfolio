import React from 'react'
import Header from '../Header'
import clock from '../../Assets/clock.jpeg'
import { Button } from 'react-bootstrap'

class Timer extends React.Component {
    constructor() {
        super()
        this.state = {
            timer: 1500,
            buttonClicked: false,
            value: true,
            intervalId: null
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange() {
        this.setState((prevState) => {
            return {
                buttonClicked: true,
                timer: prevState.timer - 1
            }
        })
    }

    render() {

        return (
            <div>
                <Header image={clock} headerText="Productivity Timer" />
                <form style={{ textAlign: "center", marginTop: "4vh", marginBottom: "4vh" }} >
                    <h3 > {this.state.timer} </h3>
                    <Button
                        onChange={e => this.setState({ buttonClicked: true })}
                        disabled={this.state.buttonClicked}
                        style={{ margin: "2vh" }} variant="success" onClick={() => { this.setState({ intervalId: setInterval(this.handleChange, 1000) }) }} > Start Timer </Button>
                    < br />
                    <Button variant="danger" onClick={() => {

                        clearInterval(this.state.intervalId)
                        this.setState({
                            timer: 1500, buttonClicked: false
                        })

                    }} > Restart </Button>

                </form>
            </div>
        )
    }
} export default Timer