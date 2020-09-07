import React from "react";


import _ from "lodash";

function Parents({ propdata }) {
  const parents = _.get(propdata, "parents", []);

  return (
    <div>
      {parents.map((parents) => (
        <h1>{parents.name}</h1>
      ))}
    </div>
  );
}
export default Parents;