import React from 'react';
import '../newpages/frontpage.scss'

function NewKenburns() {
    return(
    <div className="kenburns2">
      
     
      {/* You can add more ".slideshow-image" elements, but remember to update the "$items" variable on SCSS */}
      <div className="slideshow2">
        <div
          className="slideshow-image2"
          style={{ backgroundImage: "url(../slideshow/pinkbow.jpg)" }}
        ></div>
        <div
          className="slideshow-image2"
          style={{ backgroundImage: "url(../slideshow/purple.jpg)" }}
        ></div>
        <div
          className="slideshow-image2"
          style={{ backgroundImage: "url(../slideshow/suitcase.jpg)" }}
        ></div><div
          className="slideshow-image2"
          style={{ backgroundImage: "url(../slideshow/stare.jpg)" }}
        ></div>
        
      </div>
</div>
    )
}
export default NewKenburns