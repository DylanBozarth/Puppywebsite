import React from "react";
import {
  NavLink,
} from "reactstrap";
import useTitle from "../hooks/useTitle";
import _ from "lodash";


function Affliates({propdata}) {
  useTitle("JYMR Doodles");
  const affliates = _.get(propdata, "affliates", []);
  return (
    <div className="container-fluid">
      <h1 className="puppytitle">Our Affliates</h1>
      <div className="row">
      {affliates.map((affliates) => (
           <div className="col-sm-4"  key={affliates.name}> <NavLink href={affliates.link}>
              <img
                className="homecard frame"
               
                src={affliates.image}
                alt={affliates.name}
              />
              <h1 className="puppyname">{affliates.name}</h1>

              <p className="puppysubtitle">{affliates.description}</p>
            </NavLink></div>
          ))}
      </div>
    </div>
  );
}
export default Affliates;
