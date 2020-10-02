import React from "react";
import useTitle from "../hooks/useTitle";

import _ from "lodash";

function Labradoodles({ propdata }) {
  const labradoodles = _.get(propdata, "labradoodles", []);
  

  useTitle("Labradoodles");

  return (
    <div className="container-fluid innerpage" >
     
        <div className="puppyseperator">
          <h1 className="innerpagetitle">Labradoodles</h1>
          <p className="innerpagesubtitle">50% poodle, 50% labrador, 100% love</p>
        </div>

        <div className="row puppyrow no-gutters prva">
          {labradoodles.map((labradoodles) => (
            <div className="col-sm-4" style={{ width: "20rem" }} key={labradoodles.name}>
              <img
                className="homecard frame"
                height="300px"
                width="280px"
                src={labradoodles.image}
                alt={labradoodles.name}
              />
              <h1 className="puppyname">{labradoodles.name}</h1>

              <p className="puppysubtitle">{labradoodles.description}</p>
            </div>
          ))}
        </div>
      </div>
  );
}
export default Labradoodles;
