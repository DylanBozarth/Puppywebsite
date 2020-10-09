import React from 'react';

import _ from "lodash";



function PuppyWaitList({propdata}) {
    
  const poodlewaitlist = _.get(propdata, "poodlewaitlist", []);
return (
    <div> {poodlewaitlist.map((poodlewaitlist) => (
        <div className="col-sm-4"  key={poodlewaitlist.name}>
        
          <h1 className="puppyname">{poodlewaitlist.name}</h1>

          <p className="puppysubtitle">{poodlewaitlist.date}</p>
        </div>
      ))}</div>
)
}
export default PuppyWaitList