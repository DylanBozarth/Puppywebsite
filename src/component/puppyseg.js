import React from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import { IconContext } from "react-icons";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

function PuppySeg() {
    return(
    <div className="puppysegment">
        <h1 className="puppytitle">"Dogs can cure disease, if that disease is depression"</h1>

        <div className="row puppyrow no-gutters prva">
          <div className="col-sm-4">
            <StyledNavLink to="/about" className="nohighlight">
              <img
                className="homecard portrait"
                height="300px"
                width="280px"
                src="./puppies/family.jpg"
              ></img>
              <h1 className="hometitle">About us</h1>
              <p className="homeinfo">
                {" "}
                More infoMore infoMore infoMore infoMore infoMore infoMore
                infoMore infoMore infoMore infoMore info{" "}
              </p>
              <IconContext.Provider
      value={{ color: 'black', size: '50px', className: "arrows"}}
    ><MdKeyboardArrowRight  /> <MdKeyboardArrowRight /> <MdKeyboardArrowRight /></IconContext.Provider>
            </StyledNavLink>
          </div>

          <div className="col-sm-4">
            <StyledNavLink to="/puppies" className="nohighlight">
              <img
                className="homecard portrait"
                height="300px"
                width="280px"
                src="./puppies/shiba.jpg"
              ></img>
              <h1 className="hometitle">Puppies</h1>
              <p className="homeinfo">
                {" "}
                More infoMore infoMore infoMore infoMore infoMore infoMore
                infoMore infoMore infoMore infoMore info{" "}
              </p>
              <IconContext.Provider
      value={{ color: 'black', size: '50px', className: "arrows"}}
    ><MdKeyboardArrowRight  /> <MdKeyboardArrowRight /> <MdKeyboardArrowRight /></IconContext.Provider>
            </StyledNavLink>
          </div>
          <div className="col-sm-4">
            <a
              href="https://www.pawtree.com/jymrdoodles"
              target="_blank"
              className="nohighlight"
            >
              <img
                className="homecard portrait"
                height="300px"
                width="280px"
                src="./puppies/shiba.jpg"
              ></img>
              <h1 className="hometitle">Pawtree food</h1>
              <p className="homeinfo">
                {" "}
                More infoMore infoMore infoMore infoMore infoMore infoMore
                infoMore infoMore infoMore infoMore info{" "}
              </p>
              <IconContext.Provider
      value={{ color: 'black', size: '50px', className: "arrows"}}
    ><MdKeyboardArrowRight  /> <MdKeyboardArrowRight /> <MdKeyboardArrowRight /></IconContext.Provider>
            </a>
          </div>
        </div>
        </div>
    )
}
const StyledNavLink = styled(NavLink)`
  text-emphasis: none;
  text-decoration: none;
  color: black;
  &:hover {
    text-emphasis: none;
    text-decoration: none;
    color: black;
  }
`;

export default PuppySeg