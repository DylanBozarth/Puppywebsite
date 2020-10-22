import React from 'react';


import _ from "lodash";

function Reviews({propdata}) {
    
  const reviews = _.get(propdata, "reviews", []);

  return( 
    <div className="container-fluid innerpage guardianpage">


  
{reviews
          .filter((x) => x.image !== "")
          .map((reviews) => (
            
            <div className="col-lg-4" key={reviews.name}>
              
              <img
                className="img-fluid"
               
                src={reviews.image}
                alt={reviews.name}
              />
            
              
              
              
              <h4 className="puppyname centertext">"{reviews.testimonial}"</h4>
<p className="puppytitle">-{reviews.owner}</p>
            </div>
          ))} 
          
        </div>
  )

}
export default Reviews