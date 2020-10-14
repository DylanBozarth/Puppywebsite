import React from "react";


import useTitle from "../hooks/useTitle";
import _ from "lodash";

function Parents({ propdata }) {
  const parents = _.get(propdata, "parents", []);
  useTitle("JYMR doodles");
  return (
    <div className="container-fluid innerpage" >
      <div className="puppyseperator"> <h1 className="puppytitle">Goldendoodles</h1></div>
     
      <div className="row">
          {parents.map((parents) => (
            <div className="col-lg-6">
            <div
              className=" parentcard"
              
              key={parents.name}
            >
              <img
                className="homecard frame"
                
                src={parents.image}
                alt={parents.name}
              />
              <h1 className="puppyname">{parents.name}</h1>
              <p className="puppysubtitle">{parents.age}</p>
<a className="puppysubtitle" href={parents.geneticLink}>See my genetic analysis</a>
              
             
            </div>

<p className="puppysubtitle centertext">Puppies from {parents.name}</p>
            <div className="gallery  frame col-lg-6 container-fluid">
   <img className="img-fluid" src={parents.firstpuppy} alt={parents.name} />
   <img className="img-fluid"  src={parents.secondpuppy} alt={parents.name}  />
   <img className="img-fluid"  src={parents.thirdpuppy} alt={parents.name}  />
   <img className="img-fluid"  src={parents.forthpuppy}  alt={parents.name} />
   
</div>


            </div>
          ))}
          </div>
        </div>
        
    
  );
}
export default Parents;
