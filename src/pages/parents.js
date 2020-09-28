import React from "react";


import useTitle from "../hooks/useTitle";
import _ from "lodash";

function Parents({ propdata }) {
  const parents = _.get(propdata, "parents", []);
  useTitle("JYMR doodles");
  return (
    <div className="container-fluid" >
      <div className="puppyseperator"> <h1 className="puppytitle">Goldendoodles</h1></div>
     
      <div className="row parentrow  ">
          <div className="col-2"></div>
          {parents.slice(0, 2).map((parents) => (
            <div
              className="parentcard  col"
              style={{ width: "20rem" }}
              key={parents.name}
            >
              <img
                className="homecard"
                height="350px"
                width="250px"
                src={parents.image}
                alt={parents.name}
              />
              <h1>{parents.name}</h1>
              <p>{parents.age}</p>

              <p className="cardesc">{parents.description}</p>
            <div className="col-2"></div></div>
          ))}
          
        </div>
        <div className="puppyseperator"> <h1 className="puppytitle">Doodle parents</h1></div>
        <div className="row parentrow  ">
          <div className="col-2"></div>
          {parents.slice(2, 4).map((parents) => (
            <div
              className="parentcard  col"
              style={{ width: "20rem" }}
              key={parents.name}
            >
              <img
                className="homecard"
                height="350px"
                width="250px"
                src={parents.image}
                alt={parents.name}
              />
              <h1>{parents.name}</h1>
              <p>{parents.age}</p>

              <p className="cardesc">{parents.description}</p>
            <div className="col-2"></div></div>
          ))}
          
        </div>
        <div className="puppyseperator"> <h1 className="puppytitle">Poodle Parents</h1></div>
        <div className="row parentrow  ">
          <div className="col-2"></div>
          {parents.slice(4, 6).map((parents) => (
            <div
              className="parentcard  col"
              style={{ width: "20rem" }}
              key={parents.name}
            >
              <img
                className="homecard"
                height="350px"
                width="250px"
                src={parents.image}
                alt={parents.name}
              />
              <h1>{parents.name}</h1>
              <p>{parents.age}</p>

              <p className="cardesc">{parents.description}</p>
            <div className="col-2"></div></div>
          ))}
          
        </div>
    </div>
  );
}
export default Parents;
