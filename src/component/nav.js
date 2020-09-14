import React, { useState } from 'react';
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
  DropdownItem
} from 'reactstrap';

export const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" className="navbarmaster" light expand="md">
        <NavbarBrand href="/"><img width="50px" height="50px" src="./assets/doglogo.png" alt="logo"></img>JYMR DOODLES</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
          <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
               Doggos
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

              </DropdownMenu>

            </UncontrolledDropdown>
            
            
            
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Info 
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
            <NavItem>
              <NavLink href="/application">Adoption application</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/affliates">Our affliates</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://www.pawtree.com/jymrdoodles" target="_blank">Pawtree food</NavLink>
            </NavItem>
          </Nav>
          
        </Collapse>
      </Navbar>
    </div>
  );
}
