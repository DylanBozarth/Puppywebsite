import React from 'react';


import _ from "lodash";

function Reviews({propdata}) {
    
  const reviews = _.get(propdata, "reviews", []);

  return( 
    <div className="container-fluid innerpage ">


  
{reviews
          .filter((x) => x.image !== "")
          .map((reviews) => (
            <div className="row">
            <div className="col-lg-12" key={reviews.name}>
              
              <div className="text-center">
              <img
                className="img-fluid"
               
                src={reviews.image}
                alt={reviews.name}
              />
            </div>
              
              
              
              <h4 className="reviewname text-center">"{reviews.testimonial}"</h4>
<p className="puppyname centertext reviewname">-{reviews.owner}</p>
            </div>
            </div>
          ))} 
          
        </div>
  )

}
export default Reviews