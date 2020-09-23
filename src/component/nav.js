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
    <div className="container-fluid">
      <div className="row">
      <div className="col"></div>
        <Navbar className="navbarmaster align-self-center" light expand="md">
          <NavbarToggler onClick={toggle} />
          <NavbarBrand href="/" className="navbarlogo2 img-fluid">
            <img
              width="180px"
              height="135px"
              src="./assets/headerlogo.png"
              alt="logo"
            ></img>
          </NavbarBrand>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret className="">
                  <img
                    width="110px"
                    height="80px"
                    src="./assets/navboneinfo.png"
                    
                    className="img-fluid  navbone"
                  ></img>
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
                <DropdownToggle nav caret className="">
                  <img
                    width="110px"
                    height="80px"
                    src="./assets/navbone.png"
                    className="img-fluid navbone"
                  ></img>
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
                <NavLink href="/reviews" className="">
                  {" "}
                  <img
                    width="110px"
                    height="80px"
                    
                    className="img-fluid  navbone"
                    src="./assets/navbonereview.png"
                  ></img>
                </NavLink>
              </NavItem>

              <NavLink
                href="https://www.pawtree.com/jymrdoodles"
                className=""
                target="_blank"
              >
                {" "}
                <NavItem>
                  <img
                    width="110px"
                    
                    className="img-fluid  navbone"
                    height="80px"
                    src="./assets/navbonepawtreee.png"
                  ></img>
                </NavItem>
              </NavLink>
            </Nav>
          </Collapse>
        </Navbar>
        <div className="col"></div>
      </div>
    </div>
  );
};
export default Navigation;
