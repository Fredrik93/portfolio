import React, { Fragment } from 'react'
import AboutUs from './Components/AboutUs'
import Home from './Components/Home'
import { Route, Switch } from "react-router-dom";
import Services from './Components/Services'
import Counter from './Components/Counter';
function Routes() {
    return (
        <Fragment>

            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about-us" component={AboutUs} />
                <Route path="/services" component={Services} />
                <Route path="/counter" component={Counter} />
            </Switch>
        </Fragment>
    )
} export default Routes