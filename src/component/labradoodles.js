import React from "react";
import useTitle from "../hooks/useTitle";

import useFavicon from "../hooks/useFavicon";
import _ from "lodash";

function Labradoodles({ propdata }) {
  const labradoodles = _.get(propdata, "labradoodles", []);
  const NOMORELABRADOODLES = _.get(propdata, "NOMORELABRADOODLES", []);

  const labradoodlewaitlist = _.get(propdata, "labradoodlewaitlist", []);
  useFavicon('./assets/labradoodleiconfinal.png');
  useTitle("Labradoodles");

  return (
    <div className="container-fluid innerpage" >
     
        <div className="puppyseperator">
          <h1 className="innerpagetitle">Labradoodles</h1>
          <p className="innerpagesubtitle">50% labradoodle, 50% labrador, 100% love</p>
          {NOMORELABRADOODLES.map((NOMORELABRADOODLES) => (
          <h1>{NOMORELABRADOODLES.message}</h1>
        ))}
        </div>

        <div className="row puppyrow ">
          {labradoodles.map((labradoodles) => (
            <div className="col-sm-4"  key={labradoodles.name}>
              <img
                className="homecard frame"
               
                src={labradoodles.image}
                alt={labradoodles.name}
              />
              <h1 className="puppyname">{labradoodles.name}</h1>

              <p className="puppysubtitle">{labradoodles.description}</p>
            </div>
          ))}
        </div>
        <h1 className="puppytitle">Wait list</h1>
        <div className="row">
         
        {labradoodlewaitlist.map((labradoodlewaitlist) => (
            <div className="col-sm-4"  key={labradoodlewaitlist.name}>
            
              <h1 className="puppyname">{labradoodlewaitlist.name}</h1>
<p className="puppysubtitle">{labradoodlewaitlist.number}</p>
              <p className="puppysubtitle">Reserved on: {labradoodlewaitlist.date}</p>
            </div>
          ))}
          </div>
      </div>
  );
}
export default Labradoodles;
