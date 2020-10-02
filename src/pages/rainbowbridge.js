import React from "react";
import _ from "lodash";
import ImageGallery from "react-image-gallery";
function RainbowBridge({ propdata }) {
  const pastdogs = _.get(propdata, "pastdogs", []);
  return (
    <div className="container-fluid slider">
      <ImageGallery
        className=""
        items={pastdogs}
        showFullscreenButton={false}
        lazyLoad={true}
      ></ImageGallery>
    </div>
  );
}
export default RainbowBridge;
