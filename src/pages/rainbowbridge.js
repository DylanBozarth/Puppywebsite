import React from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

import _ from "lodash";

function RainbowBridge({ propdata }) {
  const pastdogs = _.get(propdata, "pastdogs", []);
  return (
    <AwesomeSlider className="slidermaster">
      {pastdogs.map((pastdogs) => (
        <div className="slidertab">
          <div>
            <h1 className="slidertext">{pastdogs.name}</h1>
            <img className="" alt="RIP this dog" src={pastdogs.image} />
            <p>{pastdogs.description}</p>
            <p>{pastdogs.year}</p>
          </div>
        </div>
      ))}
    </AwesomeSlider>
  );
}
export default RainbowBridge;
