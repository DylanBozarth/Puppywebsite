import React from "react";
import useTitle from "../hooks/useTitle";
import _ from "lodash";

function Puppies({ propdata }) {
  const litter1 = _.get(propdata, "litter1", []);
  const litterName = _.get(propdata, "litterName", []);
  const litterTheme = _.get(propdata, "litterTheme", []);
  const litter1Waitlist = _.get(propdata, "litter1Waitlist", []);
  const litter1IsOut = _.get(propdata, "litter1IsOut", []);
  const parents = _.get(propdata, "parents", []);
  const litter2 = _.get(propdata, "litter2", []);
  const litter2Name = _.get(propdata, "litter2Name", []);
  const litter2Theme = _.get(propdata, "litter2Theme", []);
  const litter2Waitlist = _.get(propdata, "litter2Waitlist", []);
  const litter2IsOut = _.get(propdata, "litter2IsOut", []);
  const litter3 = _.get(propdata, "litter3", []);
  const litter3Name = _.get(propdata, "litter3Name", []);
  const litter3Theme = _.get(propdata, "litter3Theme", []);
  const litter3Waitlist = _.get(propdata, "litter3Waitlist", []);
  const litter3IsOut = _.get(propdata, "litter3IsOut", []);
  const litter4 = _.get(propdata, "litter4", []);
  const litter4Name = _.get(propdata, "litter4Name", []);
  const litter4Theme = _.get(propdata, "litter4Theme", []);
  const litter4Waitlist = _.get(propdata, "litter4Waitlist", []);
  const litter4IsOut = _.get(propdata, "litter4IsOut", []);
  useTitle("Your Next Dog");

  return (
    <div className="container-fluid innerpage">
      <div className="maintitle ">
        <h1 className="centertext">All Puppies</h1>
      </div>

      <div className="puppyseperator">
        {litterName
          .filter((x) => x.name !== "")
          .map((litterName) => (
            <h1>{litterName.name}</h1>
          ))}
         <a className="centertext" href="#litter1">
          {" "}
          {litter3IsOut
            .filter((x) => x.name !== "")
            .map((litter1IsOut) => (
              <div>{litter1IsOut.waitlist}</div>
            ))}
        </a>
      </div>

      <div className="text-center">
        {litterTheme
          .filter((x) => x.name !== "")
          .map((litterTheme) => (
            <img
              src={litterTheme.image}
              className="img-fluid homecard frame"
              alt="theme"
            ></img>
          ))}
      </div>
      <div className="text-center">
        {litter1IsOut
          .filter((x) => x.name !== "")
          .map((litter1IsOut) => (
            <h1>{litter1IsOut.message}</h1>
          ))}
      </div>
      <div className="row ">
        {litter1
          .filter((x) => x.name !== "")
          .map((litter1) => (
            <div className="col-sm-4" key={litter1.name}>
              <img
                className="homecard frame"
                src={litter1.image}
                alt={litter1.name}
              />
              <h1 className="puppyname">{litter1.name}</h1>

              <p className="puppysubtitle">{litter1.description}</p>
            </div>
          ))}
      </div>
      <h3 className="centertext">
        {" "}
        {litter1IsOut
          .filter((x) => x.name !== "")
          .map((litter1IsOut) => (
            <div>{litter1IsOut.parents}</div>
          ))}
      </h3>
      <div className="row">
        {parents
          .slice(0, 2)
          .filter((x) => x.name !== "")
          .map((parents) => (
            <div className="parentcard col-sm-6" key={parents.name}>
              <img
                className="homecard frame img-fluid"
                src={parents.image}
                alt={parents.name}
              />
              <h1 className="puppyname">{parents.name}</h1>
              <a className="puppysubtitle" href={parents.geneticLink}>
                Genetic analysis
              </a>
              <p className="puppysubtitle">{parents.description}</p>
            </div>
          ))}
      </div>
      {/* end of first litter */}
      <div className="puppyseperator">
        {litter2Name
          .filter((x) => x.name !== "")
          .map((litter2Name) => (
            <h1>{litter2Name.name}</h1>
          ))}
         <a className="centertext" href="#litter1">
          {" "}
          {litter3IsOut
            .filter((x) => x.name !== "")
            .map((litter2IsOut) => (
              <div>{litter2IsOut.waitlist}</div>
            ))}
        </a>
      </div>

      <div className="text-center">
        {litter2Theme
          .filter((x) => x.name !== "")
          .map((litter2Theme) => (
            <img
              src={litter2Theme.image}
              className="img-fluid homecard frame"
              alt="theme"
            ></img>
          ))}
      </div>
      <div className="text-center">
        {litter2IsOut
          .filter((x) => x.name !== "")
          .map((litter2IsOut) => (
            <h1>{litter2IsOut.message}</h1>
          ))}
      </div>
      <div className="row ">
        {litter2
          .filter((x) => x.name !== "")
          .map((litter2) => (
            <div className="col-sm-4" key={litter2.name}>
              <img
                className="homecard frame"
                src={litter2.image}
                alt={litter2.name}
              />
              <h1 className="puppyname">{litter2.name}</h1>

              <p className="puppysubtitle">{litter2.description}</p>
            </div>
          ))}
      </div>
      <h3 className="centertext">
        {" "}
        {litter2IsOut
          .filter((x) => x.name !== "")
          .map((litter2IsOut) => (
            <div>{litter2IsOut.parents}</div>
          ))}
      </h3>
      <div className="row">
        {parents
          .slice(2, 4)
          .filter((x) => x.name !== "")
          .map((parents) => (
            <div className="parentcard col-sm-6" key={parents.name}>
              <img
                className="homecard frame img-fluid"
                src={parents.image}
                alt={parents.name}
              />
              <h1 className="puppyname">{parents.name}</h1>
              <a className="puppysubtitle" href={parents.geneticLink}>
                Genetic analysis
              </a>
              <p className="puppysubtitle">{parents.description}</p>
            </div>
          ))}
      </div>
      {/* end of 2nd litter */}
      <div className="puppyseperator">
        {litter3Name
          .filter((x) => x.name !== "")
          .map((litter3Name) => (
            <h1>{litter3Name.name}</h1>
          ))}
        <a className="centertext" href="#litter1">
          {" "}
          {litter3IsOut
            .filter((x) => x.name !== "")
            .map((litter3IsOut) => (
              <div>{litter3IsOut.waitlist}</div>
            ))}
        </a>
      </div>

      <div className="text-center">
        {litter3Theme
          .filter((x) => x.name !== "")
          .map((litter3Theme) => (
            <img
              src={litter3Theme.image}
              className="img-fluid homecard frame"
              alt="theme"
            ></img>
          ))}
      </div>
      <div className="text-center">
        {litter3IsOut
          .filter((x) => x.name !== "")
          .map((litter3IsOut) => (
            <h1>{litter3IsOut.message}</h1>
          ))}
      </div>
      <div className="row ">
        {litter3
          .filter((x) => x.name !== "")
          .map((litter3) => (
            <div className="col-sm-4" key={litter3.name}>
              <img
                className="homecard frame"
                src={litter3.image}
                alt={litter3.name}
              />
              <h1 className="puppyname">{litter3.name}</h1>

              <p className="puppysubtitle">{litter3.description}</p>
            </div>
          ))}
      </div>
      <h3 className="centertext">
        {" "}
        {litter3IsOut
          .filter((x) => x.name !== "")
          .map((litter3IsOut) => (
            <div>{litter3IsOut.parents}</div>
          ))}
      </h3>
      <div className="row">
        {parents
          .slice(4, 6)
          .filter((x) => x.name !== "")
          .map((parents) => (
            <div className="parentcard col-sm-6" key={parents.name}>
              <img
                className="homecard frame img-fluid"
                src={parents.image}
                alt={parents.name}
              />
              <h1 className="puppyname">{parents.name}</h1>
              <a className="puppysubtitle" href={parents.geneticLink}>
                Genetic analysis
              </a>
              <p className="puppysubtitle">{parents.description}</p>
            </div>
          ))}
      </div>
      {/* end of 3rd litter */}
      <div className="puppyseperator">
        {litter4Name
          .filter((x) => x.name !== "")
          .map((litter4Name) => (
            <h1>{litter4Name.name}</h1>
          ))}
        <a className="puppysubtitle" href="#litter3"></a>
      </div>

      <div className="text-center">
        {litter4Theme
          .filter((x) => x.image !== "")
          .map((litter4Theme) => (
            <img
              src={litter4Theme.image}
              className="img-fluid homecard frame"
              alt="theme"
            ></img>
          ))}
      </div>
      <div className="text-center">
        {litter4IsOut
          .filter((x) => x.name !== "")
          .map((litter4IsOut) => (
            <h1>{litter4IsOut.message}</h1>
          ))}
      </div>
      <div className="row ">
        {litter4
          .filter((x) => x.name !== "")
          .map((litter4) => (
            <div className="col-sm-4" key={litter4.name}>
              <img
                className="homecard frame"
                src={litter4.image}
                alt={litter4.name}
              />
              <h1 className="puppyname">{litter4.name}</h1>

              <p className="puppysubtitle">{litter4.description}</p>
            </div>
          ))}
      </div>
      <h3 className="centertext">
        {" "}
        {litter4IsOut
          .filter((x) => x.name !== "")
          .map((litter4IsOut) => (
            <div>{litter4IsOut.parents}</div>
          ))}
      </h3>
      <div className="row">
        {parents
          .slice(6, 8)
          .filter((x) => x.name !== "")
          .map((parents) => (
            <div className="parentcard col-sm-6" key={parents.name}>
              <img
                className="homecard frame img-fluid"
                src={parents.image}
                alt={parents.name}
              />
              <h1 className="puppyname">{parents.name}</h1>
              <a className="puppysubtitle" href={parents.geneticLink}>
                Genetic analysis
              </a>
              <p className="puppysubtitle">{parents.description}</p>
            </div>
          ))}
      </div>
      {/* end of 4rd litter */}
      {litterName
          .filter((x) => x.name !== "")
          .map((litterName) => (
        <h1 className="text-center" id="litter1">
          Waitlist for {litterName.name}
        </h1>
      ))}
      <div className="row">
      {litter1Waitlist
          .filter((x) => x.name !== "")
          .map((litter1Waitlist) => (
          <div className="col-sm-4" key={litter1Waitlist.name}>
            <h1 className="puppyname">{litter1Waitlist.name}</h1>
            <p className="puppysubtitle">
              Number in line: {litter1Waitlist.number}
            </p>
            <p className="puppysubtitle">Reserved on: {litter1Waitlist.date}</p>
          </div>
        ))}
      </div>
      {/* end of first waitlist */}
      {litter2Name
          .filter((x) => x.name !== "")
          .map((litter2Name) => (
        <h1 className="text-center" id="litter2">
          Waitlist for {litter2Name.name}
        </h1>
      ))}
      <div className="row">
      {litter2Waitlist
          .filter((x) => x.name !== "")
          .map((litter2Waitlist) => (
          <div className="col-sm-4" key={litter2Waitlist.name}>
            <h1 className="puppyname">{litter2Waitlist.name}</h1>
            <p className="puppysubtitle">
              Number in line: {litter2Waitlist.number}
            </p>
            <p className="puppysubtitle">Reserved on: {litter2Waitlist.date}</p>
          </div>
        ))}
      </div>
      {/* end of second waitlist  */}
      {litter3Name
          .filter((x) => x.name !== "")
          .map((litter3Name) => (
        <h1 className="text-center" id="litter3">
          Waitlist for {litter3Name.name}
        </h1>
      ))}
      <div className="row">
      {litter3Waitlist
          .filter((x) => x.name !== "")
          .map((litter3Waitlist) => (
          <div className="col-sm-4" key={litter3Waitlist.name}>
            <h1 className="puppyname">{litter3Waitlist.name}</h1>
            <p className="puppysubtitle">
              Number in line: {litter3Waitlist.number}
            </p>
            <p className="puppysubtitle">Reserved on: {litter3Waitlist.date}</p>
          </div>
        ))}
      </div>
      {/* end of third waitlist  */}
      {litter4Name
          .filter((x) => x.name !== "")
          .map((litter4Name) => (
        <h1 className="text-center" id="litter3">
          Waitlist for {litter4Name.name}
        </h1>
      ))}
      <div className="row">
      {litter4Waitlist
          .filter((x) => x.name !== "")
          .map((litter4Waitlist) => (
          <div className="col-sm-4" key={litter4Waitlist.name}>
            <h1 className="puppyname">{litter4Waitlist.name}</h1>
            <p className="puppysubtitle">
              Number in line: {litter4Waitlist.number}
            </p>
            <p className="puppysubtitle">Reserved on: {litter4Waitlist.date}</p>
          </div>
        ))}
      </div>
      {/* end of forth list*/}
    </div>
  );
}
export default Puppies;
