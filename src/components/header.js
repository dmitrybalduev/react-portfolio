import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';

function Header(){
    return (
        // <Navbar  expand="lg" style={{ marginBottom: '3rem' , background:'#e9c46a'} }>
        //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //     <Navbar.Collapse id="basic-navbar-nav">
        //         <Nav className="mr-auto">
        //             <Link to="/">About Me</Link>
        //             <Link to="portfolio">Portfolio</Link>
        //             <Link to="resume">Resume</Link>
        //             <Link to="contact">Contact Me</Link>
        //         </Nav>
        //     </Navbar.Collapse>
        // </Navbar>
/////////////////////////
    
/////////////////////////
  
    // <ul class="nav nav-tabs" id="myTab" role="tablist">
    //     <li class="nav-item">
    //         <NavLink to="resume">
    //         <a class="nav-link active" id="home-tab" data-toggle="tab" to="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
    //         </NavLink>
    //     </li>
    //     <li class="nav-item">
    //     <NavLink to="contact">
    //         <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
    //         </NavLink>
    //     </li>
    //     <li class="nav-item">
    //         <a class="nav-link" id="contact-tab" data-toggle="tab" href="resume" role="tab" aria-controls="contact" aria-selected="false">Contact</a>
    //     </li>
       
    // </ul>

    <nav className="nav nav-pills flex-column flex-sm-row" expand="lg" style={{ marginBottom: '3rem' , background:'#e9c46a', fontFamily: "Zen Tokyo Zoo, cursive"} }>
        <NavLink to="/">
            <a className="flex-sm-fill text-sm-center nav-link " >About Me</a>
        </NavLink>
        <NavLink to="portfolio">
            <a className="flex-sm-fill text-sm-center nav-link" >Portfolio</a>
        </NavLink>
        <NavLink to="resume">
            <a className="flex-sm-fill text-sm-center nav-link" >Resume</a>
        </NavLink>
        <NavLink to="contact">
            <a className="flex-sm-fill text-sm-center nav-link">Contact</a>
        </NavLink>
    </nav>


    )
}
export default Header;