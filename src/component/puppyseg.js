import React from 'react';
import { MdKeyboardArrowRight } from "react-icons/md";
import { IconContext } from "react-icons";
import { NavLink } from "react-router-dom";

function PuppySeg() {
    return(
    <div className="puppysegment">
        <h1 className="puppytitle">"Dogs can cure disease, if that disease is depression"</h1>

        <div className="row puppyrow no-gutters prva">
          <div className="col-sm-4">
            <NavLink to="/about" className="nohighlight">
              <img
                className="homecard portrait"
                height="300px"
                width="280px"
                src="./puppies/family.jpg"
              ></img>
              <h1 className="hometitle">Info</h1>
              <p className="homeinfo">
                {" "}
                More infoMore infoMore infoMore infoMore infoMore infoMore
                infoMore infoMore infoMore infoMore info{" "}
              </p>
              <IconContext.Provider
      value={{ color: 'black', size: '50px', className: "arrows"}}
    ><MdKeyboardArrowRight  /> <MdKeyboardArrowRight /> <MdKeyboardArrowRight /></IconContext.Provider>
            </NavLink>
          </div>

          <div className="col-sm-4">
            <NavLink to="/puppies" className="nohighlight">
              <img
                className="homecard portrait"
                height="300px"
                width="280px"
                src="./puppies/shiba.jpg"
              ></img>
              <h1 className="hometitle">Info</h1>
              <p className="homeinfo">
                {" "}
                More infoMore infoMore infoMore infoMore infoMore infoMore
                infoMore infoMore infoMore infoMore info{" "}
              </p>
              <IconContext.Provider
      value={{ color: 'black', size: '50px', className: "arrows"}}
    ><MdKeyboardArrowRight  /> <MdKeyboardArrowRight /> <MdKeyboardArrowRight /></IconContext.Provider>
            </NavLink>
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
              <h1 className="hometitle">Info</h1>
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
export default PuppySeg