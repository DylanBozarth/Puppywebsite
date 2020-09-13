import React from "react";
import useTitle from "../hooks/useTitle";

import _ from "lodash";

function Poodles({ propdata }) {
  const poodles = _.get(propdata, "poodles", []);
  

  useTitle("World class Poodles");

  return (
    <div className="container-fluid" >
      
        <div className="puppyseperator">
          <h1>Poodles!</h1>
          <p>Our best sellers</p>
        </div>

        <div className="row puppyrow no-gutters prva">
          {poodles.map((poodles) => (
            <div className="col-sm-4" style={{ width: "20rem" }} key={poodles.name}>
              <img
                className="homecard"
                height="300px"
                width="280px"
                src={poodles.image}
                alt={poodles.name}
              />
              <h1>{poodles.name}</h1>
              <p>{poodles.price}</p>

              <p className="cardesc">{poodles.description}</p>
            </div>
          ))}
        </div>
      
    </div>
  );
}
export default Poodles;
