import React from "react";
import useTitle from "../hooks/useTitle";
import _ from "lodash";

function Puppies({ propdata }) {
  const litter1 = _.get(propdata, "litter1", []);
  const litterName = _.get(propdata, "litterName", []);
  const litterTheme = _.get(propdata, "litterTheme", []);
  const litter1Waitlist = _.get(propdata, "litter3", []);
  const litter1IsOut = _.get(propdata, "litter3", []);
  const parents = _.get(propdata, "parents", []);
  useTitle("Your Next Dog");

  return (
    <div className="container-fluid innerpage">
      <div className="maintitle ">
        <h1 className="centertext">All Puppies</h1>
      </div>

      <div className="puppyseperator">
        {litterName.map((litterName) => (
          <h1>{litterName.name}</h1>
        ))}
        <a className="puppysubtitle" href="#litter1Waitlist">
          See wait list
        </a>
      </div>
      <div className="text-center">
        {litterTheme.map((litterTheme) => (
          <img
            src={litterTheme.image}
            className="img-fluid homecard frame"
            alt="theme"
          ></img>
        ))}
      </div>
      <div className="row ">
        {litter1.map((litter1) => (
          <div className="col-sm-4" key={litter1.name}>
            <img
              className="homecard frame"
              src={litter1.image}
              alt={litter1.name}
            />
            <h1 className="puppyname">{litter1.name}</h1>

            <p className="puppysubtitle">{litter1.description}</p>
          </div>
        ))}
      </div>
      <h3 className="centertext">The proud parents</h3>
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
      </div>
    </div>
  );
}
export default Puppies;
