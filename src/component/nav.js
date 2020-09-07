import React from "react";

import { NavLink } from "react-router-dom";
import { Nav, NavDropdown, Navbar } from "react-bootstrap";

export default function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <NavLink to="/">
        <Navbar.Brand href="#home">Loopy doodles</Navbar.Brand>
      </NavLink>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav fill={true} className="">
          <NavLink to="/puppies">
            <Nav.Link href="puppies">puppies</Nav.Link>
          </NavLink>
          <NavLink to="/parents">
            <Nav.Link href="puppies">Parents</Nav.Link>
          </NavLink>
          <NavLink to="/about">
            <Nav.Link href="puppies">About us</Nav.Link>
          </NavLink>
          <NavLink to="/application">
            <Nav.Link href="puppies">Adoption Application</Nav.Link>
          </NavLink>
          <NavDropdown title="Affiliate Links" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
