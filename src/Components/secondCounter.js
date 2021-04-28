import React from 'react'
import { Fragment } from 'react';
import Header from './Header';
import inTheWoods from '../Assets/in-the-woods.jpg'
import { Col, Row } from 'react-bootstrap';



class secondCounter extends React.Component {
    render(){
        return(
            <Fragment>
            <Header headerText="Second Counter" image={inTheWoods} />
        
              
                   
                    <div style={{textAlign:"center"}} >
                        Counter: 
                                       </div>
                  
                
      

            </Fragment>
        )
    }
}
export default secondCounter;