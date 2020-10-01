import React from "react";
import _ from "lodash";
import ImageGallery from 'react-image-gallery';
function RainbowBridge({ propdata }) {
  const pastdogs = _.get(propdata, "pastdogs", []);
  return (
    <ImageGallery items={pastdogs} showFullscreenButton={false}>
      {pastdogs.map((pastdogs) => (
        <div className="slidertab">
          <div>
            <h1 className="slidertext">{pastdogs.name}</h1>
            
            <p>{pastdogs.description}</p>
            <p>{pastdogs.year}</p>
          </div>
        </div>
      ))}
    </ImageGallery>
  );
}
export default RainbowBridge;
