import React from "react";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import './navbar.style.css'

import {Navbar, Nav} from 'react-bootstrap'

const Header = () => {
  return (
    <div class="header_main">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link><NavLink to="/">Home</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/jsonPlaceHolder">JsonPlaceHolder</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/jsonPlaceHolder">aa</NavLink></Nav.Link>
            <Nav.Link><NavLink to="/jsonPlaceHolder">bb</NavLink></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
