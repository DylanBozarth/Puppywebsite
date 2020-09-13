import React from "react";
import useTitle from "../hooks/useTitle";

import _ from "lodash";

function Goldendoodles({ propdata }) {
  const goldendoodles = _.get(propdata, "goldendoodles", []);

  useTitle("Your Next Dog");

  return (
    <div className="container-fluid" >
      
        <div className="puppyseperator">
          <h1>Goldendoodles! </h1>
          <p>I don't know how to describe them, but they sure are cute.</p>
        </div>

        <div className="row puppyrow no-gutters prva">
          {goldendoodles.map((goldendoodles) => (
            <div className="col-sm-4" style={{ width: "20rem" }} key={goldendoodles.name}>
              <img
                className="homecard"
                height="300px"
                width="280px"
                src={goldendoodles.image}
                alt={goldendoodles.name}
              />
              <h1>{goldendoodles.name}</h1>
              <p>{goldendoodles.price}</p>

              <p className="cardesc">{goldendoodles.description}</p>
            </div>
          ))}
        </div>
      
    </div>
  );
}
export default Goldendoodles;
