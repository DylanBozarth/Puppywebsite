import React from 'react';


import _ from "lodash";

function Reviews({propdata}) {
    
  const reviews = _.get(propdata, "reviews", []);

  return( 
    <div className="container-fluid breedinfopage">
<div className="row puppyrow no-gutters prva">
   
  
          {reviews.map((reviews) => (
            <div className="col-sm-4" style={{ width: "25rem" }} key={reviews.name}>
              <img
                className="homecard"
                height="300px"
                width="280px"
                src={reviews.image}
                alt={reviews.name}
              />
              <h4>"{reviews.testimonial}"</h4>
<p>-{reviews.owner}</p>
              <p className="cardesc">{reviews.description}</p>
            </div>
          ))}
        </div></div>
  )

}
export default Reviews