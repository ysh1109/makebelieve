import React from 'react'
import './Header.css'
import { Navbar, NavDropdown,Form ,Nav ,FormControl, Button} from 'react-bootstrap';
import logo from '../Assets/SVG/logo_1.svg'
import {
  Link
} from "react-router-dom";

function Header() {
    return (
        <div style={{paddingTop:'5px'}} >
        <Navbar expand="lg">
          <Link to="/">
        <Navbar.Brand>
            <img  src={logo} className="brand-logo-style img-fluid"></img>
        </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{marginRight:'50px'}} className="ml-auto mt-auto">
          <Link className="nav-link"  style={{textDecoration:'none'}} to="/">home</Link>
            <Link className="nav-link" style={{textDecoration:'none'}} to="/work">work</Link>
            <Link className="nav-link" style={{textDecoration:'none'}} to="/about">about</Link>
            <Link className="nav-link" style={{textDecoration:'none'}} to="/connect">Connect</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
    )
}

export default Header