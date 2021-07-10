import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


function Header(){
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link to="">About Me</Nav.Link>
                    <Nav.Link href="portfolio">Portfolio</Nav.Link>
                    <Nav.Link href="resume">Resume</Nav.Link>
                    <Nav.Link href="contact">Contact Me</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}
export default Header;