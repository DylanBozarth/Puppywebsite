import React from 'react';


import _ from "lodash";

function Reviews({propdata}) {
    
  const reviews = _.get(propdata, "reviews", []);

  return( 
    <div className="container-fluid innerpage">
<div className="row  ">

  
          {reviews.map((reviews) => (
            
            <div className="col-lg-12 " key={reviews.name}>
              <img
                className="homecardreview mx-auto d-block"
               
                src={reviews.image}
                alt={reviews.name}
              />
              
              
              
              <h4 className="puppyname">"{reviews.testimonial}"</h4>
<p className="puppytitle">-{reviews.owner}</p>
            </div>
          ))} 
          
        </div></div>
  )

}
export default Reviews