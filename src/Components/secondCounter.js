import React from 'react'
import { Fragment } from 'react';
import Header from './Header';
import inTheWoods from '../Assets/in-the-woods.jpg'
import { Col, Row, Button, Container } from 'react-bootstrap';




class secondCounter extends React.Component {
    constructor(){
        super()
        this.state= {
            counter: 0,
            anotherCounter:2
        }
        this.count = this.count.bind(this)
        
    }

    count() {

        console.log("working")
        this.setState(prevState =>{
          
            return{
                counter: prevState.counter +1 
            }
            if(prevState.counter === 5){
                console.log("prevState.counter is " + prevState.counter)
            }
            
        })
    
    }
    render(){

       
        var styling= {
            textAlign:"center", marginTop:"10vh"
        }
        
        return(
            <Fragment>
            <Header headerText="Second Counter" image={inTheWoods} />
            <Container style={styling} >
                <div style={{marginBottom:"2vh"}}>
               Counter: {this.state.counter}
               </div>
               <Button variant="secondary" onClick={this.count} >Click dis</Button>    

               </Container>
               
{/* https://mdbootstrap.com/docs/react/utilities/flexbox/ */}
      

            </Fragment>
        )
    }
}
export default secondCounter;