import React, { Fragment } from 'react'
import AboutUs from './Components/AboutUs'
import Home from './Components/Home'
import { Route, Switch } from "react-router-dom";
import Services from './Components/Services'
import Counter from './Components/Counter';
import { Todos } from './Components/Todos';
import UnderMaintenance from './Components/UnderMaintenance';
import Timer from './Components/Pomodoro/Timer';
import secondCounter from './Components/secondCounter'
import AllProjects from './Components/AllProjects';
function Routes() {
    return (
        <Fragment>

            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/about-us" component={AboutUs} />
                <Route path="/services" component={Services} />
                <Route path="/counter" component={Counter} />
                <Route path="/todos" component={Todos} />
                <Route path="/under-maintenance" component={UnderMaintenance} />
                <Route path="/timer" component={Timer} />
                <Route path="/secondCounter"  component={secondCounter} />
                <Route path="/all-projects" component={AllProjects}/>
            </Switch>
        </Fragment>
    )
} export default Routes