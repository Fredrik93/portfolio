import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import '../Styles/Navbar.css'
import logo from '../Assets/logo-white.png'
function NavBar() {

    return (
        <Navbar id="navbar" expand="lg" >
            <Navbar.Brand href="/"> <img id="img-logo" alt="uic-logo" src={logo} /> </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="navlinks">
                    <Nav.Link id="navlink" href="/"> Home</Nav.Link>
                    <Nav.Link id="navlink" href="/services">Tjänster</Nav.Link>
                    <Nav.Link id="navlink" href="/about-us">Om Oss</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default NavBar