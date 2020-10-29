import React from "react";
import { NavLink } from "reactstrap";
import useTitle from "../hooks/useTitle";
import _ from "lodash";

function Affliates({ propdata }) {
  useTitle("JYMR Doodles");
  const affliates = _.get(propdata, "affliates", []);
  const amazon = _.get(propdata, "amazon", []);
  return (
    <div className="container-fluid innerpage">
      <h1 className="puppyname centertext">Our Affliates</h1>
      <div className="row">
        {affliates.map((affliates) => (
          <div className="col-sm-4" key={affliates.name}>
            {" "}
            <NavLink href={affliates.link}>
              <img
                className="homecard frame img-fluid"
                src={affliates.image}
                alt={affliates.name}
              />
              <h1 className="puppyname">{affliates.name}</h1>

              <p className="puppysubtitle">{affliates.description}</p>
            </NavLink>
          </div>
        ))}
      </div>
      <h1 className="puppyname centertext">Products we reccomend</h1>
      <div className="row">
        {amazon.map((amazon) => (
          <div className="col-sm centertext" key={amazon.link}>
            <iframe
            title="item"
              marginwidth="0"
              marginheight="0"
              scrolling="no"
              frameborder="0"
              src={amazon.link}
            ></iframe>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Affliates;
