import React from 'react'
import { Fragment } from 'react';
import Header from './Header';
import inTheWoods from '../Assets/in-the-woods.jpg'
import { Col, Row, Button, Container } from 'react-bootstrap';




class secondCounter extends React.Component {
    constructor(){
        super()
        this.count = this.count.bind(this)
    }

    count() {
        console.log("working")
    }
    render(){

       
        var styling= {
            textAlign:"center", marginTop:"10vh"
        }
        var count = 1;
        return(
            <Fragment>
            <Header headerText="Second Counter" image={inTheWoods} />
            <Container>
           <div style={styling} >
               Counter: {count}
               </div>
               <Button style={styling} variant="secondary" onClick={this.count} >Click dis</Button>    

               </Container>
               
{/* https://mdbootstrap.com/docs/react/utilities/flexbox/ */}
      

            </Fragment>
        )
    }
}
export default secondCounter;