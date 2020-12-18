import React, { Fragment } from 'react'
import Footer from './Components/Footer';
import NavBar from './Components/Navbar';
import Routes from './Routes';

function App() {
  return (
    <Fragment>
      <NavBar />
      <Routes />
      <Footer />
    </Fragment>
  )
}
export default App