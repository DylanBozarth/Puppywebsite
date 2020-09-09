import React from "react";

function Home() {
  return (
    <div>
      <h1 className="homeh1">
        <small>Fullscreen</small> Ken Burns effect{" "}
        <small>without javascript</small>
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
