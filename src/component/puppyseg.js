import React from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import { IconContext } from "react-icons";
import { NavLink } from "react-router-dom";
import styled from 'styled-components';

function PuppySeg() {
    return(
    <div className="puppysegment">
        <div className=" quote"><p className="quotetext">"A dog is the only thing on earth that loves you more than you love yourself." </p></div>

        <div className="row puppyrow no-gutters  container-fluid">
          <div className="col-sm-4 container-fluid">
            <StyledNavLink to="/about" className="nohighlight">
              <img
                className="homecard img-fluid"
                height="350px"
                width="350px"
                alt="puppy"
                src="./assets/homecardabout.png"
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
                className="homecard img-fluid"
                height="350px"
                width="350px"
                src="./assets/puppycard.png"
                alt="puppy"
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
          <div className="col-sm-4 ">
            <a
              href="https://www.pawtree.com/jymrdoodles"
              target="_blank"
              className="nohighlight"
              rel="noopener noreferrer"
            >
              <img
                className="homecard  img-fluid"
                height="350px"
                width="350px"
                alt="puppy"
                src="./assets/pawtreecard.png"
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