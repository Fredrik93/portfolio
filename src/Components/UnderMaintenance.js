import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'
import Header from './Header'
import defaultImg from '../Assets/service3.jpg'

function UnderMaintenance() {
    return (
        <div>
            <Header headerText=" Oh! This page is under construction" image={defaultImg} buttonLabel="Go Home" />
        </div>
    )
} export default UnderMaintenance