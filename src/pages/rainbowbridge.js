import React from "react";
import Card from '../component/card'
import _ from "lodash";
function RainbowBridge({ propdata }) {
  const pastdogs = _.get(propdata, "pastdogs", []);
  return (
    <div className="container-fluid innerpage">
      <div className="row">
        {pastdogs.map((pastdogs) => (
          <Card
        imgUrl={pastdogs.image}
        title={pastdogs.name}
        description={pastdogs.description} 
      />
        ))}
      </div>
    </div>
  );
}
export default RainbowBridge;
