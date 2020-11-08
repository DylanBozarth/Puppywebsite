import React from "react";
import Card from '../component/card'
import _ from "lodash";
function RainbowBridge({ propdata }) {
  const pastdogs = _.get(propdata, "pastdogs", []);
  return (
    <div className="container-fluid innerpage">
      <div className="row">
      {
        pastdogs
        .filter((x) => x.name !== "")
        .map((pastdogs)=> (
          <Card
        imgUrl={pastdogs.image}
        title={pastdogs.name}
        description={pastdogs.description} 
      />
        ))}
        
      </div><h1 className="text-center">Coming soon</h1>
    </div>
  );
}
export default RainbowBridge;
