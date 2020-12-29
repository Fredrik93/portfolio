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
            minutes: 25,
            seconds: 0,
            buttonClicked: false,
            value: true,
            intervalId: null,
            experience: 0
        }
        this.handleChange = this.handleChange.bind(this)
        this.saveExperience = this.saveExperience.bind(this)

    }

    //fetch the xp from database that belongs to user 
    componentDidMount() {
        fetch("http://localhost:4000/users/5fe9eaa992bdf041ed2d403f")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        experience: result.experience
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
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

    saveExperience() {
        fetch('http://localhost:4000/users/updatexp/5fe9eaa992bdf041ed2d403f', {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                experience: this.state.experience

            })
        })
        console.log("saving xp : " + this.state.experience)
    }

    render() {

        return (

            < div >
                <Header image={clock} headerText="Productivity Timer" />
                <form style={{ textAlign: "center", marginTop: "4vh", marginBottom: "4vh" }} >
                    <Row>
                        <Col >
                            <h4>Freds XP: {this.state.experience}</h4>
                            <Button variant="success" onClick={this.saveExperience} > Save XP </Button>
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