import React, { Fragment } from 'react'
import Home from './Components/Home'
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AboutUs from './Components/AboutUs';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/aboutus" component={AboutUs} />
        </Switch>
      </BrowserRouter>
    </Fragment>
  )
}
export default App