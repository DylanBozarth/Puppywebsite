import React from "react";
import useTitle from "../hooks/useTitle";

import useFavicon from "../hooks/useFavicon";
import _ from "lodash";

function Poodles({ propdata }) {
  const poodles = _.get(propdata, "poodles", []);
  const poodlewaitlist = _.get(propdata, "poodlewaitlist", []);
  
  useFavicon('./assets/poodleiconfinal.png');
  useTitle("World class Poodles");

  return (
    <div className="container-fluid innerpage" >
      
        <div className="puppyseperator">
          <h1 className="innerpagetitle">Poodles!</h1>
          <p className="innerpagesubtitle">Our best sellers</p>
        </div>

        <div className="row puppyrow no-gutters prva">
          {poodles.map((poodles) => (
            <div className="col-sm-4" style={{ width: "20rem" }} key={poodles.name}>
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
       
        {poodlewaitlist.map((poodlewaitlist) => (
            <div className="col-sm-4" style={{ width: "20rem" }} key={poodlewaitlist.name}>
            
              <h1 className="puppyname">{poodlewaitlist.name}</h1>

              <p className="puppysubtitle">{poodlewaitlist.date}</p>
            </div>
          ))}
          
    </div>
  );
}
export default Poodles;
