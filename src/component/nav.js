import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

export const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="navbarmaster" light expand="md">
        <NavbarToggler onClick={toggle} />
        <NavbarBrand href="/" className="navbarlogo2">
              <img
                width="110px"
                height="100px"
                src="./assets/logosquare.png"
                alt="logo"
              ></img>
            </NavbarBrand>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className="navitem">
              <p className="navitemtext">Info</p>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavItem>
                    <NavLink href="/about">About us</NavLink>
                  </NavItem>
                </DropdownItem>
                <DropdownItem>
                  <NavItem>
                    <NavLink href="/breedinfo">About Doodles</NavLink>
                  </NavItem>
                </DropdownItem>

                <DropdownItem>
                  <NavItem>
                    <NavLink href="/rainbowbridge">Our past greats</NavLink>
                  </NavItem>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className="navitem">
              <p className="navitemtext">DOGGOS</p>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavItem>
                    <NavLink href="/puppies">All Puppies</NavLink>
                  </NavItem>
                </DropdownItem>
                <DropdownItem>
                  <NavItem>
                    <NavLink href="/parents">Parents</NavLink>
                  </NavItem>
                </DropdownItem>
                <DropdownItem>
                  <NavItem>
                    <NavLink href="/poodles">Poodles</NavLink>
                  </NavItem>
                </DropdownItem>
                <DropdownItem>
                  <NavItem>
                    <NavLink href="/labradoodles">Labradoodles</NavLink>
                  </NavItem>
                </DropdownItem>
                <DropdownItem>
                  <NavItem>
                    <NavLink href="/goldendoodles">Goldendoodles</NavLink>
                  </NavItem>
                </DropdownItem>
                <DropdownItem>
                  <NavItem>
                    <NavLink href="/application">Application</NavLink>
                  </NavItem>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavbarBrand href="/" className="navbarlogo">
              <img
                width="200px"
                height="200px"
                src="./assets/headerlogo.png"
                alt="logo"
              ></img>
            </NavbarBrand>

            <NavItem>
              <NavLink href="/reviews" className="navitem">
                {" "}
                <p className="navitemtext">Reviews</p>
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink
                href="https://www.pawtree.com/jymrdoodles"
                className="navitem"
                target="_blank"
              >
               <p className="navitemtext">Pawtree Food</p>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
