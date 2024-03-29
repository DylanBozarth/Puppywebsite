import React from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import { IconContext } from "react-icons";
import {
  
  NavLink
 
} from "reactstrap";
function PuppySeg() {
    return(
    <div className="puppysegment">
        

        <div className="row puppyrow   container-fluid">
         

          <div className="col-sm-4">
            <NavLink href="/newpups" className="nohighlight">
              <img
                className="homecard img-fluid"
                
                src="./assets/puppycard.png"
                alt="puppy"
              ></img>
              <h1 className="hometitle">Puppies</h1>
              <p className="homeinfo">
                {" "}
                See our current litters!{" "}
              </p>
              <IconContext.Provider
      value={{ color: 'black', size: '50px', className: "arrows"}}
    ><MdKeyboardArrowRight  /> <MdKeyboardArrowRight /> <MdKeyboardArrowRight /></IconContext.Provider>
            </NavLink>
          </div>
          <div className="col-sm-4">
            <NavLink href="/about" className="nohighlight">
              <img
                className="homecard img-fluid"
               
                alt="puppy"
                src="./assets/homecardabout.png"
              ></img>
              <h1 className="hometitle">About us</h1>
              <p className="homeinfo">
                {" "}
                Get the 411 on JYMR doodles{" "}
              </p>
              <IconContext.Provider
      value={{ color: 'black', size: '50px', className: "arrows"}}
    ><MdKeyboardArrowRight  /> <MdKeyboardArrowRight /> <MdKeyboardArrowRight /></IconContext.Provider>
            </NavLink>
          </div>
          <div className="col-sm-4">
            <NavLink
              href="https://www.pawtree.com/jymrdoodles"
              target="_blank"
              className="nohighlight"
              rel="noopener noreferrer"
            >
              
              <img
                className="homecard  img-fluid"
                
                alt="puppy"
                src="./assets/pawtreecard.png"
              ></img>
              <h1 className="hometitle">Pawtree</h1>
              <p className="homeinfo ">
                {" "}
                Get the best nutrition for your dog{" "}
              </p>
              <IconContext.Provider
      value={{ color: 'black', size: '50px', className: "arrows"}}
    ><MdKeyboardArrowRight  /> <MdKeyboardArrowRight /> <MdKeyboardArrowRight /></IconContext.Provider>
            </NavLink>
          </div>
        </div>
        </div>
    )
}

;

export default PuppySeg