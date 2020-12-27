import React from 'react'
import Header from '../Header'
import clock from '../../Assets/clock.jpeg'
import { Button, Col, Row } from 'react-bootstrap'
import './Timer.css'

class Timer extends React.Component {
    constructor() {
        super()
        this.state = {
            timer: 1500,
            minutes: 1,
            seconds: 0,
            buttonClicked: false,
            value: true,
            intervalId: null,
            experience: 0
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
        this.countDown()
    }

    countDown() {
        if (this.state.minutes === 0 && this.state.seconds === 0) {
            alert("Times Up! breakie breakie!!! ")
            this.setState({ minutes: 25, seconds: 0 })
            clearInterval(this.state.intervalId)
            this.setState(prevState => ({
                buttonClicked: !prevState.buttonClicked
            }));
        }
        this.setState((prevState) => {
            if (this.state.seconds === 0) {
                return {
                    minutes: this.state.minutes - 1, seconds: 5, experience: this.state.experience + 1
                }
            }
            return {
                seconds: prevState.seconds - 1
            }


        })
        console.log(this.state.seconds + "seconds")
    }

    render() {

        return (

            < div >
                <Header image={clock} headerText="Productivity Timer" />
                <form style={{ textAlign: "center", marginTop: "4vh", marginBottom: "4vh" }} >
                    <Row>
                        <Col >
                            <h4>Freds XP: {this.state.experience}</h4>
                        </Col>
                        <Col>
                            <div className="timer-component" >
                                <h3 > {this.state.timer} </h3>
                                <h3 >{this.state.minutes}:{this.state.seconds !== 59 ? this.state.seconds : "00"} </h3>
                            </div>
                            <Button
                                onChange={e => this.setState({ buttonClicked: true })}
                                disabled={this.state.buttonClicked}
                                style={{ margin: "2vh" }} variant="success" onClick={() => { this.setState({ intervalId: setInterval(this.handleChange, 1000) }) }} > Start Timer </Button>
                            <Button variant="danger" onClick={() => {
                                clearInterval(this.state.intervalId)
                                this.setState({
                                    timer: 1500, buttonClicked: false
                                })

                            }} > Restart </Button>

                        </Col>
                        <Col>   </Col>
                    </Row>

                </form>
            </div >
        )
    }
} export default Timer