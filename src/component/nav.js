import React from "react";

import { NavLink } from "react-router-dom";
import { Nav, NavDropdown, Navbar, Container } from "react-bootstrap";

export default function Navigation() {
  return (
    <Navbar bg="light" expand="lg" className="navbarmaster">
      <NavLink to="/">
          <img src="./logo192.png" width="50vw" height="50px" alt="aa"></img>
          <Navbar.Brand href="#home">Loopy doodles</Navbar.Brand>
        </NavLink><Container>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav fill={true} className="">
            <NavLink to="/puppies" className="navItem">
              <Nav.Link href="puppies">puppies</Nav.Link>
            </NavLink>
            <NavLink to="/parents"  className="navItem">
              <Nav.Link href="puppies">Parents</Nav.Link>
            </NavLink>
            <NavLink to="/about" className="navItem">
              <Nav.Link href="puppies">About us</Nav.Link>
            </NavLink>
            <NavLink to="/application" className="navItem">
              <Nav.Link href="puppies">Adoption Application</Nav.Link>
            </NavLink>
            <NavLink to="/affliates" className="navItem">
              <Nav.Link href="puppies">Affliates</Nav.Link>
            </NavLink>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
