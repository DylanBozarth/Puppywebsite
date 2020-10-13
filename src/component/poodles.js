import React from "react";
import useTitle from "../hooks/useTitle";

import useFavicon from "../hooks/useFavicon";
import _ from "lodash";

function Poodles({ propdata }) {
  const poodles = _.get(propdata, "poodles", []);
  const poodlewaitlist = _.get(propdata, "poodlewaitlist", []);
  const NOMOREPOODLES = _.get(propdata, "NOMOREPOODLES", []);
  useFavicon('./assets/poodleiconfinal.png');
  useTitle("World class Poodles");

  return (
    <div className="container-fluid innerpage" >
      
        <div className="puppyseperator">
          <h1 className="innerpagetitle">Poodles!</h1>
          <p className="innerpagesubtitle">Our best sellers</p>
          {NOMOREPOODLES.map((NOMOREPOODLES) => (
          <h1>{NOMOREPOODLES.message}</h1>
        ))}
        </div>

        <div className="row puppyrow ">
          {poodles.map((poodles) => (
            <div className="col-sm-4"  key={poodles.name}>
              <img
                className="homecard frame"
               
                src={poodles.image}
                alt={poodles.name}
              />
              <h1 className="puppyname">{poodles.name}</h1>

              <p className="puppysubtitle">{poodles.description}</p>
            </div>
          ))}
        </div>
       <h1 className="puppytitle">Wait list</h1>
       <div className="row">
         
        {poodlewaitlist.map((poodlewaitlist) => (
            <div className="col-sm-4"  key={poodlewaitlist.name}>
            
              <h1 className="puppyname">{poodlewaitlist.name}</h1>
<p className="puppysubtitle">{poodlewaitlist.number}</p>
              <p className="puppysubtitle">Reserved on: {poodlewaitlist.date}</p>
            </div>
          ))}
          </div>
    </div>
  );
}
export default Poodles;
