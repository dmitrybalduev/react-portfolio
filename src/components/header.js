import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header(){
    return (
        <Navbar  expand="lg" style={{ marginBottom: '3rem' , background:'#e9c46a'} }>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Link to="/">About Me</Link>
                    <Link to="portfolio">Portfolio</Link>
                    <Nav.Link href="resume">Resume</Nav.Link>
                    <Nav.Link href="contact">Contact Me</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        
    )
}
export default Header;