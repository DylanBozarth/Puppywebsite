import React from "react";

import { NavLink } from "react-router-dom";
import useTitle from "../hooks/useTitle";
import _ from "lodash";
import Aboutseg from "../component/aboutseg";

function Home({ propdata }) {
  useTitle("JYMR doodles");
  const poodles = _.get(propdata, "poodles", []);
  const labradoodles = _.get(propdata, "labradoodles", []);
  const goldendoodles = _.get(propdata, "goldendoodles", []);
  return (
    <div>
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
        <div className="pageline"></div>
        <NavLink className="nohighlight" to="/puppies">
          <h1 className="puppytitle">Your next dog</h1>
          <div className="row puppyrow no-gutters prva">
            <div className="">
              {poodles.slice(0, 1).map((poodles) => (
                <div
                  className="col-sm-4"
                  style={{ width: "20rem" }}
                  key={poodles.name}
                >
                  <img
                    className="homecard"
                    height="300px"
                    width="280px"
                    src={poodles.image}
                    alt={poodles.name}
                  />
                  <div className="cardbox">
                  <h1>{poodles.name}</h1>
                  

                  <p>{poodles.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="">
              {labradoodles.slice(0, 1).map((labradoodles) => (
                <div
                  className="col-sm-4"
                  style={{ width: "20rem" }}
                  key={labradoodles.name}
                >
                  <img
                    className="homecard"
                    height="300px"
                    width="280px"
                    src={labradoodles.image}
                    alt={labradoodles.name}
                  />
                  <div className="cardbox">
                  <h1>{labradoodles.name}</h1>
                 

                  <p>{labradoodles.description}</p>
                </div>
                </div>
              ))}
            </div>
            <div className="">
              {goldendoodles.slice(0, 1).map((goldendoodles) => (
                <div
                  className="col-sm-4"
                  style={{ width: "20rem" }}
                  key={goldendoodles.name}
                >
                  <img
                    className="homecard"
                    height="300px"
                    width="280px"
                    src={goldendoodles.image}
                    alt={goldendoodles.name}
                  />
                  <div className="cardbox">
                  <h1>{goldendoodles.name}</h1>
                  

                  <p className="cardesc">{goldendoodles.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </NavLink>
        <div className="pageline"></div>
        
          <NavLink className="nohighlight container-fluid" to="/about">
            <Aboutseg />
          </NavLink>
          <div className="pageline"></div>
        </div>
      
      ;<div className="pageline"></div>
    </div>
  );
}
export default Home;
