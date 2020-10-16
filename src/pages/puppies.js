import React from "react";
import useTitle from "../hooks/useTitle";

import _ from "lodash";

function Puppies({ propdata }) {
  const poodles = _.get(propdata, "poodles", []);
  const poodlewaitlist = _.get(propdata, "poodlewaitlist", []);
  const labradoodles = _.get(propdata, "labradoodles", []);
  const labradoodlewaitlist = _.get(propdata, "labradoodlewaitlist", []);
  const goldendoodles = _.get(propdata, "goldendoodles", []);
  const NOMOREGOLDENDOODLES = _.get(propdata, "NOMOREGOLDENDOODLES", []);
  const parents = _.get(propdata, "parents", []);
  
  const NOMORELABRADOODLES = _.get(propdata, "NOMORELABRADOODLES", []);
  const NOMOREPOODLES = _.get(propdata, "NOMOREPOODLES", []);
  useTitle("Your Next Dog");

  return (
    <div className="container-fluid innerpage">
      <div className="maintitle ">
        <h1 className="centertext">Puppies</h1>
      </div>
      <div className="puppyseperator">
        <h1>Poodles!</h1>
        
      </div> 
      <p className="centertext">The proud parents</p>
      <div className="row">
        {parents.slice(0, 2).map((parents) => (
          <div className="parentcard col-sm-6" key={parents.name}>
            <img
              className="homecard frame img-fluid"
              src={parents.image}
              alt={parents.name}
            />
            <h1 className="puppyname">{parents.name}</h1>
            <a className="puppysubtitle" href={parents.geneticLink}>
              Genetic analysis
            </a>
            <p className="puppysubtitle">{parents.description}</p>
          </div>
          
        ))}
      </div>{NOMOREPOODLES.map((NOMOREPOODLES) => (
          <h1 className="badnews">{NOMOREPOODLES.message}</h1>
        ))}
      <div className="row puppyrow no-gutters prva">
        {poodles.map((poodles) => (
          <div className="col-sm-4" key={poodles.name}>
            <img
              className="homecard puppycard frame"
              src={poodles.image}
              alt={poodles.name}
            />
            <h1 className="puppyname">{poodles.name}</h1>
            <p className="puppysubtitle">{poodles.price}</p>

            <p className="cardesc">{poodles.description}</p>
          </div>
        ))}
      </div>

      <div className="puppyseperator">
        <h1>Labradoodles</h1>
      </div>
      <p className="centertext">The proud parents</p>
      <div className="row">
        {parents.slice(2, 4).map((parents) => (
          <div className="parentcard col-sm-6" key={parents.name}>
            <img
              className="homecard frame img-fluid"
              src={parents.image}
              alt={parents.name}
            />
            <h1 className="puppyname">{parents.name}</h1>
            <a className="puppysubtitle" href={parents.geneticLink}>
              Genetic analysis
            </a>
            <p className="puppysubtitle">{parents.description}</p>
          </div>
        ))}
      </div> {NOMORELABRADOODLES.map((NOMORELABRADOODLES) => (
          <h1 className="badnews">{NOMORELABRADOODLES.message}</h1>
        ))}
      <div className="row puppyrow no-gutters prva">
        {labradoodles.map((labradoodles) => (
          <div className="col-sm-4" key={labradoodles.name}>
            <img
              className="homecard frame"
              src={labradoodles.image}
              alt={labradoodles.name}
            />
            <h1 className="puppyname">{labradoodles.name}</h1>
            <p className="puppysubtitle">{labradoodles.price}</p>

            <p className="cardesc">{labradoodles.description}</p>
          </div>
        ))}
      </div>

      <div className="puppyseperator">
        <h1>Goldendoodles! </h1>
        
      </div>
      <div className="row">
        {parents.slice(4, 6).map((parents) => (
          <div className="parentcard col-sm-6" key={parents.name}>
            <img
              className="homecard frame img-fluid"
              src={parents.image}
              alt={parents.name}
            />
            <h1 className="puppyname">{parents.name}</h1>
            <a className="puppysubtitle" href={parents.geneticLink}>
              Genetic analysis
            </a>
            <p className="puppysubtitle">{parents.description}</p>
          </div>
        ))}
      </div> {NOMOREGOLDENDOODLES.map((NOMOREGOLDENDOODLES) => (
          <h1 className="badnews">{NOMOREGOLDENDOODLES.message}</h1>
        ))}
      <div className="row puppyrow no-gutters prva">
        {goldendoodles.map((goldendoodles) => (
          <div className="col-sm-4" key={goldendoodles.name}>
            <img
              className="homecard frame"
              src={goldendoodles.image}
              alt={goldendoodles.name}
            />
            <h1 className="puppyname">{goldendoodles.name}</h1>
            <p className="puppysubtitle">{goldendoodles.price}</p>

            <p className="cardesc">{goldendoodles.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Puppies;
