import React from "react";

import { NavLink } from "react-router-dom";
import { Nav, NavDropdown, Navbar, Container } from "react-bootstrap";

export default function Navigation() {
  return (
    <Navbar bg="light" expand="lg" className="navbarmaster">
      <NavLink to="/">
        <img src="./logo192.png" width="50vw" height="50px" alt="aa"></img>
        <Navbar.Brand href="#home">Loopy doodles</Navbar.Brand>
      </NavLink>
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav fill={true} className="">
            <NavDropdown title="Puppies">
              <NavDropdown.Item href="#action/3.1" className="">
                <NavLink to="/puppies" className="">
                  puppies
                </NavLink>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1" className="">
                <NavLink to="/parents" className="">
                  
                    Parents
                  
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="About and Info">
              <NavDropdown.Item href="#action/3.1" className="">
                <NavLink to="/about" className="">
                  About us
                </NavLink>
                <br />
                <NavLink to="/breedinfo" className="">
                  Breed Info
                </NavLink>
                <br />
                <NavLink to="/TheRainbowBridge" className="">
                  Our Past pups
                </NavLink>
              </NavDropdown.Item>
            </NavDropdown>

            <NavLink to="/application" className="navItem">
              <Nav.Link href="puppies" className="navtext">
                Adoption Application
              </Nav.Link>
            </NavLink>
            <NavLink to="/affliates" className="navItem">
              <Nav.Link href="puppies" className="navtext">
                Affliates
              </Nav.Link>
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
