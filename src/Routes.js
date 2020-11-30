import React, { Fragment } from 'react'
import AboutUs from './Components/AboutUs'
import Home from './Components/Home'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Services from './Components/Services'
function Routes() {
    return (
        <Fragment>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about-us" component={AboutUs} />
                    <Route path="/services" component={Services} />
                </Switch>
            </BrowserRouter>
        </Fragment>
    )
} export default Routes