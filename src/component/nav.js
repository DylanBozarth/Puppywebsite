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
              src="./assets/headerlogo.jpg"
              alt="logo"
            ></img>
          </NavbarBrand>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="" navbar>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav className="">
                  <img
                    width="150px"
                    height="110px"
                    src="./assets/in-fur-mation.png"
                    alt="navbone"
                    className="img-fluid  navbone"
                  ></img>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    <NavLink href="/about">
                      <NavItem className="navdropdown">JYMR 411</NavItem>
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/breedinfo">
                      <NavItem className="navdropdown">Doodle facts</NavItem>
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/affliates">
                      <NavItem className="navdropdown">Doodle supply list</NavItem>
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/FAQ">
                      <NavItem className="navdropdown">FAQ</NavItem>
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav className="">
                  <img
                    width="150px"
                    height="110px"
                    alt="navbone"
                    src="./assets/navbone.png"
                    className="img-fluid navbone"
                  ></img>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem>
                    <NavLink href="/application" className="navdropdown">
                      <NavItem>Puppy Application</NavItem>
                    </NavLink>
                  </DropdownItem>
                 
                  <DropdownItem>
                    <NavLink href="/puppies">
                      <NavItem className="navdropdown">Current litters</NavItem>
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/parents">
                      <NavItem className="navdropdown">Meet the Pawrents</NavItem>
                    </NavLink>
                  </DropdownItem>
                
                  
                    
          

                  <DropdownItem>
                    <NavLink href="/guardians">
                      <NavItem className="navdropdown">Puppy Guardians</NavItem>
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink href="/rainbowbridge">
                      <NavItem className="navdropdown">Our past greats</NavItem>
                    </NavLink>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavbarBrand href="/" className="">
                <img
                  width="180px"
                  height="180px"
                  src="./assets/headerlogo.jpg"
                  className="navbarlogo"
                  alt="navbone"
                ></img>
              </NavbarBrand>

              <NavItem>
                <NavLink href="/reviews" className="">
                  {" "}
                  <img
                    width="150px"
                    height="110px"
                    alt="navbone"
                    className="img-fluid  navbone"
                    src="./assets/navbonereview.png"
                  ></img>
                </NavLink>
              </NavItem>

              <NavLink
                href="https://www.pawtree.com/jymrdoodles/myrecommendation/Standard-Package?fbclid=IwAR1x9IKyAO0ojODicSbSXWO7305bY4A3jnFoJZvPQaAHLBcMmMnqhjZXhPY"
                className=""
                target="_blank"
              >
                {" "}
                <NavItem>
                  <img
                    width="150px"
                    height="110px"
                    alt="navbone"
                    className="img-fluid  navbone"
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
