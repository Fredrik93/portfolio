import React from 'react'
import { Fragment } from 'react';
import Header from './Header';
import inTheWoods from '../Assets/in-the-woods.jpg'


class secondCounter extends React.Component {
    render(){
        return(
            <Fragment>
            <Header headerText="Second Counter" image={inTheWoods} />
            <h1> Working as a class component!</h1>
            </Fragment>
        )
    }
}
export default secondCounter;