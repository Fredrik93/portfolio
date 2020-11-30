import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import '../Styles/App.css'
import logo from '../Assets/logo-white.png'
function NavBar() {

    return (
        <Navbar id="navbar" expand="lg" >
            <Navbar.Brand href="#home"> <img id="img-logo" alt="uic-logo" src={logo} /> </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Link</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default NavBar