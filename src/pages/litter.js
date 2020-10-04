import React from "react";
import useTitle from "../hooks/useTitle";

import _ from "lodash";

function Newlitter({ propdata }) {
  const Newlitter = _.get(propdata, "Newlitter", []);
  

  useTitle("Your Next Dog");

  return (
    <div className="container-fluid innerpage" >
      <div className="puppyseperator">
          <h1>Our newest Litter</h1>
        </div>

        <div className="row puppyrow no-gutters prva">
          {Newlitter.map((Newlitter) => (
            <div className="col-sm-4" style={{ width: "20rem" }} key={Newlitter.name}>
              <img
                className="homecard puppycard frame"
                height="300px"
                width="280px"
                src={Newlitter.image}
                alt={Newlitter.name}
              />
              <h1>{Newlitter.name}</h1>
              <p>Born on {Newlitter.Borndate}</p>

              <p className="cardesc">{Newlitter.description}</p>
            </div>
          ))}
        </div>
    </div>
  );
}
export default Newlitter;