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
  const litter5 = _.get(propdata, "litter5", []);
  const litter5Name = _.get(propdata, "litter5Name", []);
  const litter5Theme = _.get(propdata, "litter5Theme", []);
  const litter5Waitlist = _.get(propdata, "litter5Waitlist", []);
  const litter5IsOut = _.get(propdata, "litter5IsOut", []);
  const litter6 = _.get(propdata, "litter6", []);
  const litter6Name = _.get(propdata, "litter6Name", []);
  const litter6Theme = _.get(propdata, "litter6Theme", []);
  const litter6Waitlist = _.get(propdata, "litter6Waitlist", []);
  const litter6IsOut = _.get(propdata, "litter6IsOut", []);
  const litter7 = _.get(propdata, "litter7", []);
  const litter7Name = _.get(propdata, "litter7Name", []);
  const litter7Theme = _.get(propdata, "litter7Theme", []);
  const litter7Waitlist = _.get(propdata, "litter7Waitlist", []);
  const litter7IsOut = _.get(propdata, "litter7IsOut", []);
  useTitle("Your Next Dog");

  return (
    <div className="container-fluid innerpage">
      <div className="maintitle ">
        
      </div>

      <div className="puppyseperator">
        {litterName
          .filter((x) => x.name !== "")
          .map((litterName) => (
            <h1 className="puppyname">{litterName.name}</h1>
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
          .filter((x) => x.image !== "")
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
                className="homecard frame img-fluid"
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
      <div className="row text-center">
        {parents
          .slice(0, 2)
          .filter((x) => x.name !== "")
          .map((parents) => (
            <div className=" col-sm-6" key={parents.name}>
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
            <h1 className="puppyname">{litter2Name.name}</h1>
          ))}
         <a className="centertext" href="#litter1">
          {" "}
          {litter2IsOut
            .filter((x) => x.name !== "")
            .map((litter2IsOut) => (
              <div>{litter2IsOut.waitlist}</div>
            ))}
        </a>
      </div>

      <div className="text-center">
        {litter2Theme
          .filter((x) => x.image !== "")
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
                className="homecard frame img-fluid "
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
      <div className="row text-center">
        {parents
          .slice(2, 4)
          .filter((x) => x.name !== "")
          .map((parents) => (
            <div className="col-sm-6" key={parents.name}>
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
            <h1 className="puppyname">{litter3Name.name}</h1>
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
          .filter((x) => x.image !== "")
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
                className="homecard frame img-fluid "
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
      <div className="row text-center">
        {parents
          .slice(4, 6)
          .filter((x) => x.name !== "")
          .map((parents) => (
            <div className=" col-sm-6" key={parents.name}>
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
            <h1 className="puppyname">{litter4Name.name}</h1>
          ))}
        <a className="centertext" href="#litter1"></a>
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
                className="homecard frame  img-fluid "
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
      <div className="row center-text">
        {parents
          .slice(6, 8)
          .filter((x) => x.name !== "")
          .map((parents) => (
            <div className=" col-sm-6" key={parents.name}>
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
      <div className="puppyseperator">
        {litter5Name
          .filter((x) => x.name !== "")
          .map((litter5Name) => (
            <h1 className="puppyname">{litter5Name.name}</h1>
          ))}
         <a className="centertext" href="#litter1">
          {" "}
          {litter5IsOut
            .filter((x) => x.name !== "")
            .map((litter5IsOut) => (
              <div>{litter5IsOut.waitlist}</div>
            ))}
        </a>
      </div>

      <div className="text-center">
        {litter5Theme
          .filter((x) => x.image !== "")
          .map((litter5Theme) => (
            <img
              src={litter5Theme.image}
              className="img-fluid homecard frame"
              alt="theme"
            ></img>
          ))}
      </div>
      <div className="text-center">
        {litter5IsOut
          .filter((x) => x.name !== "")
          .map((litter5IsOut) => (
            <h1>{litter5IsOut.message}</h1>
          ))}
      </div>
      <div className="row ">
        {litter5
          .filter((x) => x.name !== "")
          .map((litter5) => (
            <div className="col-sm-4" key={litter5.name}>
              <img
                className="homecard frame img-fluid "
                src={litter5.image}
                alt={litter5.name}
              />
              <h1 className="puppyname">{litter5.name}</h1>

              <p className="puppysubtitle">{litter5.description}</p>
            </div>
          ))}
      </div>
      <h3 className="centertext">
        {" "}
        {litter5IsOut
          .filter((x) => x.name !== "")
          .map((litter5IsOut) => (
            <div>{litter5IsOut.parents}</div>
          ))}
      </h3>
      <div className="row text-center">
        {parents
          .slice(8, 10)
          .filter((x) => x.name !== "")
          .map((parents) => (
            <div className="col-sm-6" key={parents.name}>
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
      {/* end of 5th litter */}
      <div className="puppyseperator">
        {litter6Name
          .filter((x) => x.name !== "")
          .map((litter6Name) => (
            <h1 className="puppyname">{litter6Name.name}</h1>
          ))}
         <a className="centertext" href="#litter1">
          {" "}
          {litter6IsOut
            .filter((x) => x.name !== "")
            .map((litter6IsOut) => (
              <div>{litter6IsOut.waitlist}</div>
            ))}
        </a>
      </div>

      <div className="text-center">
        {litter6Theme
          .filter((x) => x.image !== "")
          .map((litter6Theme) => (
            <img
              src={litter6Theme.image}
              className="img-fluid homecard frame"
              alt="theme"
            ></img>
          ))}
      </div>
      <div className="text-center">
        {litter6IsOut
          .filter((x) => x.name !== "")
          .map((litter6IsOut) => (
            <h1>{litter6IsOut.message}</h1>
          ))}
      </div>
      <div className="row ">
        {litter6
          .filter((x) => x.name !== "")
          .map((litter6) => (
            <div className="col-sm-4" key={litter6.name}>
              <img
                className="homecard frame img-fluid "
                src={litter6.image}
                alt={litter6.name}
              />
              <h1 className="puppyname">{litter6.name}</h1>

              <p className="puppysubtitle">{litter6.description}</p>
            </div>
          ))}
      </div>
      <h3 className="centertext">
        {" "}
        {litter6IsOut
          .filter((x) => x.name !== "")
          .map((litter6IsOut) => (
            <div>{litter6IsOut.parents}</div>
          ))}
      </h3>
      <div className="row text-center">
        {parents
          .slice(10, 12)
          .filter((x) => x.name !== "")
          .map((parents) => (
            <div className="col-sm-6" key={parents.name}>
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
      {/* end of 6th litter */}
      <div className="puppyseperator">
        {litter7Name
          .filter((x) => x.name !== "")
          .map((litter7Name) => (
            <h1 className="puppyname">{litter7Name.name}</h1>
          ))}
         <a className="centertext" href="#litter1">
          {" "}
          {litter7IsOut
            .filter((x) => x.name !== "")
            .map((litter7IsOut) => (
              <div>{litter7IsOut.waitlist}</div>
            ))}
        </a>
      </div>

      <div className="text-center">
        {litter7Theme
          .filter((x) => x.image !== "")
          .map((litter7Theme) => (
            <img
              src={litter7Theme.image}
              className="img-fluid homecard frame"
              alt="theme"
            ></img>
          ))}
      </div>
      <div className="text-center">
        {litter7IsOut
          .filter((x) => x.name !== "")
          .map((litter7IsOut) => (
            <h1>{litter7IsOut.message}</h1>
          ))}
      </div>
      <div className="row ">
        {litter7
          .filter((x) => x.name !== "")
          .map((litter7) => (
            <div className="col-sm-4" key={litter7.name}>
              <img
                className="homecard frame img-fluid "
                src={litter7.image}
                alt={litter7.name}
              />
              <h1 className="puppyname">{litter7.name}</h1>

              <p className="puppysubtitle">{litter7.description}</p>
            </div>
          ))}
      </div>
      <h3 className="centertext">
        {" "}
        {litter7IsOut
          .filter((x) => x.name !== "")
          .map((litter7IsOut) => (
            <div>{litter7IsOut.parents}</div>
          ))}
      </h3>
      <div className="row">
        {parents
          .slice(12, 14)
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
      {/* end of 7th litter */}
      {litterName
          .filter((x) => x.name !== "")
          .map((litterName) => (
        <h1 className="text-center puppyname" id="litter1">
         {/* Waitlist for {litterName.name} */}
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
        <h1 className="text-center puppyname" id="litter2">
         {/* Waitlist for {litter2Name.name} */}
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
        <h1 className="text-center puppyname" id="litter3">
        {/*  Waitlist for {litter3Name.name} */}
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
        <h1 className="text-center puppyname" id="litter3">
        {/*  Waitlist for {litter4Name.name} */}
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
      {litter5Name
          .filter((x) => x.name !== "")
          .map((litter5Name) => (
        <h1 className="text-center puppyname" id="litter1">
         {/* Waitlist for {litter5Name.name} */}
        </h1>
      ))}
      <div className="row">
      {litter5Waitlist
          .filter((x) => x.name !== "")
          .map((litter5Waitlist) => (
          <div className="col-sm-4" key={litter5Waitlist.name}>
            <h1 className="puppyname">{litter5Waitlist.name}</h1>
            <p className="puppysubtitle">
              Number in line: {litter5Waitlist.number}
            </p>
            <p className="puppysubtitle">Reserved on: {litter5Waitlist.date}</p>
          </div>
        ))}
      </div>
      {/* end of fitfh list */}
      {litter6Name
          .filter((x) => x.name !== "")
          .map((litter6Name) => (
        <h1 className="text-center puppyname" id="litter1">
       {/*   Waitlist for {litter6Name.name} */}
        </h1>
      ))}
      <div className="row">
      {litter6Waitlist
          .filter((x) => x.name !== "")
          .map((litter6Waitlist) => (
          <div className="col-sm-4" key={litter6Waitlist.name}>
            <h1 className="puppyname">{litter6Waitlist.name}</h1>
            <p className="puppysubtitle">
              Number in line: {litter6Waitlist.number}
            </p>
            <p className="puppysubtitle">Reserved on: {litter6Waitlist.date}</p>
          </div>
        ))}
      </div>
      {/* end of sixthe list */}
      {litter7Name
          .filter((x) => x.name !== "")
          .map((litter7Name) => (
        <h1 className="text-center puppyname" id="litter1">
          {/* Waitlist for {litter7Name.name} */}
        </h1>
      ))}
      <div className="row">
      {litter7Waitlist
          .filter((x) => x.name !== "")
          .map((litter7Waitlist) => (
          <div className="col-sm-4" key={litter7Waitlist.name}>
            <h1 className="puppyname">{litter7Waitlist.name}</h1>
            <p className="puppysubtitle">
              Number in line: {litter7Waitlist.number}
            </p>
            <p className="puppysubtitle">Reserved on: {litter7Waitlist.date}</p>
          </div>
        ))}
      </div>
      {/* end of seventh list */}
    </div>
  );
}
export default Puppies;
