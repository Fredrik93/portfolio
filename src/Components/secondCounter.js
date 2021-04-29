import React from 'react'
import { Fragment } from 'react';
import Header from './Header';
import inTheWoods from '../Assets/in-the-woods.jpg'
import { Col, Row, Button, Container } from 'react-bootstrap';




class secondCounter extends React.Component {
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
               <Button style={styling} variant="secondary" onClick={()=>{console.log("clicked")}} >Click dis</Button>    

               </Container>
               
{/* https://mdbootstrap.com/docs/react/utilities/flexbox/ */}
      

            </Fragment>
        )
    }
}
export default secondCounter;