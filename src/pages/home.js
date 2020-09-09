import React from "react";

function Home() {
  return (
    <div>
      <h1 className="homeh1">
        <small>JYMR DOODLES</small> Super cute puppies{" "}
        
      </h1>
      {/* You can add more ".slideshow-image" elements, but remember to update the "$items" variable on SCSS */}
      <div className="slideshow">
        <div
          className="slideshow-image"
          style={{backgroundImage: 'url(../puppies/shiba.jpg)'}}
        ></div>
        <div
          className="slideshow-image"
          style={{backgroundImage: 'url(../puppies/poof.jpg)'}}
        ></div>
        <div
          className="slideshow-image"
          style={{backgroundImage: 'url(../puppies/pups.jpg)'}}
        ></div>
        <div
          className="slideshow-image"
          style={{backgroundImage: 'url(../puppies/labs.jpg)'}}
        ></div>
      </div>
      ;
    </div>
  );
}
export default Home;
