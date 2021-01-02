import React from 'react'
import Header from '../Header'
import clock from '../../Assets/clock.jpeg'
import { Button, Col, Row } from 'react-bootstrap'
import './Timer.css'

class Timer extends React.Component {
    constructor() {
        super()
        this.state = {
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
            }
        })
        this.countDown()
    }

    countDown() {
        if (this.state.minutes === 0 && this.state.seconds === 0) {
            alert("Times Up! breakie breakie!!! ")
            this.saveExperience()
            //this set state sets the timer to 25:00 when the time is up, if its removed then bugs appear
            this.setState({ minutes: 25, seconds: 0 })
            clearInterval(this.state.intervalId)
            this.setState(prevState => ({
                buttonClicked: !prevState.buttonClicked
            }));
        }
        this.setState((prevState) => {
            if (this.state.seconds === 0) {
                return {
                    minutes: this.state.minutes - 1, seconds: 59, experience: this.state.experience + 1
                }
            }
            return {
                seconds: prevState.seconds - 1
            }


        })
        console.log(this.state.seconds + " seconds (this is a reminder that the function is called each time, can it be fixed?)")
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
        },
        ).catch(() => {
            console.log("Something went wrong. Check backend and try again")
            alert("Can't save xp, check server connection ")
        })
        console.log("saving xp : " + this.state.experience)
    }



    restartTimer() {
        clearInterval(this.state.intervalId)
        this.setState({
            buttonClicked: false, seconds: 0, minutes: 25
        })
    }

    render() {
        let startOrStopTimer = this.state.buttonClicked
            ? <Button style={{ margin: "2vh", paddingLeft: "4vh", paddingRight: "4vh" }} variant="info" onClick={() => {
                clearInterval(this.state.intervalId)
                this.setState({ buttonClicked: !this.state.buttonClicked })
            }} >Stop</Button>
            : <Button
                onChange={e => this.setState({ buttonClicked: true })}
                disabled={this.state.buttonClicked}
                style={{ margin: "2vh" }} variant="success" onClick={() => { this.setState({ intervalId: setInterval(this.handleChange, 1000) }) }} > Start Timer </Button>
        let decreaseTime = <div className="add-remove-time" onClick={() => {
            this.setState((prevState) => {
                if (this.state.minutes > 0)
                    return { minutes: prevState.minutes - 1 }
            })
        }} > - </div>

        let increaseTime = <div className="add-remove-time" onClick={() => {
            this.setState((prevState) => {
                return { minutes: prevState.minutes + 1 }
            })
        }} > + </div>

        let displayTimer = <div> {this.state.minutes}:{this.state.seconds === 0 ? "00" : this.state.seconds} </div>

        let displayExperience = <h4>Freds XP: {this.state.experience}</h4>

        return (
            <div >
                <Header image={clock} headerText="Productivity Timer" />
                <form className="TimerForm">
                    <Row>
                        <Col >
                            {displayExperience}
                            <Button variant="success" onClick={this.saveExperience} > Save XP </Button>
                        </Col>
                        <Col>
                            <div className="timer-component" >
                                <h3>
                                    {increaseTime}
                                    {displayTimer}
                                    {decreaseTime}
                                </h3>
                            </div>
                            {startOrStopTimer}
                            <Button variant="danger" onClick={() => { this.restartTimer() }} > Restart </Button>
                        </Col>
                        <Col>   </Col>
                    </Row>

                </form>
            </div >
        )
    }
} export default Timer