import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

function Header(){
    return (
        <Navbar  expand="lg" style={{ marginBottom: '3rem' , background:'#e9c46a'} }>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">About Me</Nav.Link>
                    <Nav.Link href="portfolio">Portfolio</Nav.Link>
                    <Nav.Link href="resume">Resume</Nav.Link>
                    <Nav.Link href="contact">Contact Me</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        
    )
}
export default Header;