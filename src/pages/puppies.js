import React from "react";



import _ from 'lodash';

function Puppies({ propdata }) {
  const puppies = _.get(propdata, 'puppies', []);

  return (
    <div>
      {puppies.map(puppies => 
        <h1 className="black">{puppies.name}</h1>
      )}
    </div>
  );
}
export default Puppies
