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

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="navbarmaster" light expand="md">
        <NavbarToggler onClick={toggle} />
        <NavbarBrand href="/" className="navbarlogo2 img-fluid">
          <img
            width="200px"
            height="135px"
            src="./assets/headerlogo.png"
            alt="logo"
          ></img>
        </NavbarBrand>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="" navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className="navitem">
                <p className="navitemtext">Info</p>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink href="/about">
                    <NavItem>About us</NavItem>
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/breedinfo">
                    <NavItem>About Doodles</NavItem>
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/affliates">
                    <NavItem>Our Affliates</NavItem>
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/rainbowbridge">
                    <NavItem>Our past greats</NavItem>
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>

            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret className="navitem">
                <p className="navitemtext">DOGGOS</p>
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  <NavLink href="/puppies">
                    <NavItem>All Puppies</NavItem>
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/parents">
                    <NavItem>Parents</NavItem>
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/poodles">
                    <NavItem>Poodles</NavItem>
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/labradoodles">
                    <NavItem>Labradoodles</NavItem>
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/goldendoodles">
                    <NavItem>Goldendoodles</NavItem>
                  </NavLink>
                </DropdownItem>
                <DropdownItem>
                  <NavLink href="/application">
                    <NavItem>Application</NavItem>
                  </NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
            <NavbarBrand href="/" className="navbarlogo">
              <img
                width="200px"
                height="170px"
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

            <NavLink
              href="https://www.pawtree.com/jymrdoodles"
              className="navitem mr-auto"
              target="_blank"
            >
              {" "}
              <NavItem >
                <p className="navitemtext">Pawtree Food</p>
              </NavItem>
            </NavLink>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
