import React from 'react';

import { NavLink } from "react-router-dom";

function PuppySeg() {
    return(
    <div className="puppysegment">
        <h1 className="puppytitle">Inspirational dog quote</h1>

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
              <button>Learn more</button>
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
              <button>Learn more</button>
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
              <button>Learn more</button>
            </a>
          </div>
        </div>
        </div>
    )
}
export default PuppySeg