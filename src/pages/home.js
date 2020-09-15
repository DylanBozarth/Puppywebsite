import React from "react";

import { NavLink } from "react-router-dom";
import useTitle from "../hooks/useTitle";
import _ from "lodash";

function Home({ propdata }) {
  useTitle("JYMR doodles");
  
  return (
    <div className="homepagemaster">
      <h1 className="homeh1">
        <small>JYMR DOODLES</small> Super cute puppies{" "}
      </h1>
      {/* You can add more ".slideshow-image" elements, but remember to update the "$items" variable on SCSS */}
      <div className="slideshow">
        <div
          className="slideshow-image"
          style={{ backgroundImage: "url(../puppies/shiba.jpg)" }}
        ></div>
        <div
          className="slideshow-image"
          style={{ backgroundImage: "url(../puppies/poof.jpg)" }}
        ></div>
        <div
          className="slideshow-image"
          style={{ backgroundImage: "url(../puppies/pups.jpg)" }}
        ></div>
        <div
          className="slideshow-image"
          style={{ backgroundImage: "url(../puppies/labs.jpg)" }}
        ></div>
      </div>

      <div className="puppysegment container-fluid">
        {/*<div className="pageline"></div> */}

        <h1 className="puppytitle">Inspirational dog quote</h1>

        <div className="row puppyrow no-gutters prva">
          
            <div className="col-sm-4"><NavLink to="/about" className="nohighlight">
              <img
                className="homecard portrait"
                height="300px"
                width="280px"
                src="./puppies/family.jpg"
              ></img>
              <h1>Info</h1>
              <p>
                {" "}
                More infoMore infoMore infoMore infoMore infoMore infoMore
                infoMore infoMore infoMore infoMore info{" "}
              </p>
              <button>Learn more</button>
            </NavLink></div>
          
            <div className="col-sm-4"><NavLink to="/puppies" className="nohighlight">
              <img
                className="homecard portrait"
                height="300px"
                width="280px"
                src="./puppies/shiba.jpg"
              ></img>
              <h1>Info</h1>
              <p>
                {" "}
                More infoMore infoMore infoMore infoMore infoMore infoMore
                infoMore infoMore infoMore infoMore info{" "}
              </p>
              <button>Learn more</button>
            </NavLink></div>
            <div className="col-sm-4"><a href="https://www.pawtree.com/jymrdoodles" target="_blank"  className="nohighlight">
              <img
                className="homecard portrait"
                height="300px"
                width="280px"
                src="./puppies/shiba.jpg" 
              ></img>
              <h1>Info</h1>
              <p>
                {" "}
                More infoMore infoMore infoMore infoMore infoMore infoMore
                infoMore infoMore infoMore infoMore info{" "}
              </p>
              <button>Learn more</button>
            </a></div>
            
        </div>
<div className="seemorepuppies container-fluid">Learn how to get your own pup <button>Apply</button></div>
       <div className="instagrambox"> <h1>Fullow us on Instagram</h1> </div>
      </div>
      
    </div>
  );
}
export default Home;
