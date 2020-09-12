import React from "react";


import useTitle from "../hooks/useTitle";
import _ from "lodash";

function Parents({ propdata }) {
  const parents = _.get(propdata, "parents", []);
  useTitle("JYMR doodles");
  return (
    <div className="container-fluid" >
       <h1 className="puppytitle">Goldendoogles</h1>
      <div className="row puppyrow no-gutters prva">
         
          {parents.slice(0, 2).map((parents) => (
            <div
              className="parentcard"
              style={{ width: "16rem" }}
              key={parents.name}
            >
              <img
                className="homecard"
                height="350px"
                width="250px"
                src={parents.image}
                alt={parents.name}
              />
              <h1>{parents.name}</h1>
              <p>{parents.age}</p>

              <p className="cardesc">{parents.description}</p>
            </div>
          ))}
        </div>
          <h1 className="puppytitle">Poodles</h1>
          <div className="row puppyrow no-gutters prva">
          {parents.slice(2, 4).map((parents) => (
            <div
              className="parentcard"
              style={{ width: "16rem" }}
              key={parents.name}
            >
              <img
                className="homecard"
                height="350px"
                width="250px"
                src={parents.image}
                alt={parents.name}
              />
              <h1>{parents.name}</h1>
              <p>{parents.age}</p>

              <p className="cardesc">{parents.description}</p>
            </div>
          ))}
        </div>
          <h1 className="puppytitle">Labradoodles</h1>
          <div className="row puppyrow no-gutters prva">
          {parents.slice(4, 6).map((parents) => (
            <div
              className="parentcard"
              style={{ width: "16rem" }}
              key={parents.name}
            >
              <img
                className="homecard"
                height="350px"
                width="250px"
                src={parents.image}
                alt={parents.name}
              />
              <h1>{parents.name}</h1>
              <p>{parents.age}</p>

              <p className="cardesc">{parents.description}</p>
            </div>
          ))}
        </div>
    </div>
  );
}
export default Parents;
