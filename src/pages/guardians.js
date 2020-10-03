import React from 'react';


function Guardians () {
    return( 
        <div className='container-fluid innerpage'>
        <div className="hero ">
          <h1>Meet our team</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <img src="./assets/team.jpg" />
           <div className="bar"></div>
        </div>
        <div className="container">
        <div className="row guardianrow">
        <div className="col-sm-4" style={{ width: "20rem" }} >
              <img
                className="homecard frame"
               
                src='./assets/1.jpg'
                alt="Aaron"
              />
              <h1 className="puppyname">Aaron</h1>

              <p className="puppysubtitle">Aaron has over 20 years of relavent puppy experience</p>
            </div>
            <div className="col-sm-4" style={{ width: "20rem" }} >
              <img
                className="homecard frame"
               
                src='./assets/2.jpg'
                alt="Aaron"
              />
              <h1 className="puppyname">Tom</h1>

              <p className="puppysubtitle">Tom is part canine. </p>
            </div>
            <div className="col-sm-4" style={{ width: "20rem" }} >
              <img
                className="homecard frame"
               
                src='./assets/3.jpg'
                alt="Aaron"
              />
              <h1 className="puppyname">Emily</h1>

              <p className="puppysubtitle">Emily can communicate with puppies telepathically. </p>
            </div>
        </div></div>
       </div>
     
    )
}
export default Guardians