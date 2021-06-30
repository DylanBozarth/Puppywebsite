import React, { Component } from "react";
import "./App.scss";
import { Navigation } from "./component/nav";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, BrowserRouter } from "react-router-dom";
import Parents from "./pages/parents";
import About from "./pages/about";
import { Footer } from "./component/footer";
import { Application } from "./pages/application";
import BreedInfo from "./pages/breedinfo";
import RainbowBridge from "./pages/rainbowbridge";
import Poodles from "./component/poodles";
import Labradoodles from "./component/labradoodles";
import Goldendoodles from "./component/goldendoodles";
import Affliates from "./pages/affliates";
import Reviews from "./pages/reviews";
import Guardians from "./pages/guardians";
import PuppyContract from "./component/puppycontract";
import GuardianContract from "./component/guardianContract";
import FAQPAGE from "./pages/faq";
import { NewPups } from "./newpages/pups";
import { Featured } from "./newpages/featuredpups";
import { FrontPage } from "./newpages/frontpage";
import { NewNav } from "./newcomponents/newnav";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      propdata: null,
    };
  }

  componentDidMount() {
    fetch("/addnewthings.json")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          ...this,
          propdata: res,
        });
      });
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="container">
            <div className="text-center">
              {" "}
              <img
                src="./assets/headerlogo.png"
                width="190px"
                height="190px"
                className="img-fluid"
                alt="doodle logo"
              ></img>
            </div>
            <NewNav />
          </div>
          <div className="page">
            <Route
              exact
              path="/"
              render={(props) => (
                <FrontPage {...props} propdata={this.state.propdata} />
              )}
            />
            <Route
              exact
              path="/puppies"
              render={(props) => (
                <NewPups {...props} propdata={this.state.propdata} />
              )}
            />
            <Route
              exact
              path="/parents"
              render={(props) => (
                <Parents {...props} propdata={this.state.propdata} />
              )}
            />
            <Route
              exact
              path="/poodles"
              render={(props) => (
                <Poodles {...props} propdata={this.state.propdata} />
              )}
            />
            <Route
              exact
              path="/labradoodles"
              render={(props) => (
                <Labradoodles {...props} propdata={this.state.propdata} />
              )}
            />
            <Route
              exact
              path="/goldendoodles"
              render={(props) => (
                <Goldendoodles {...props} propdata={this.state.propdata} />
              )}
            />

            <Route
              exact
              path="/reviews"
              render={(props) => (
                <Reviews {...props} propdata={this.state.propdata} />
              )}
            />
            <Route exact path="/about" component={About} />
            <Route exact path="/application" component={Application} />
            <Route exact path="/breedinfo" component={BreedInfo} />
            <Route exact path="/newpups" component={NewPups} />
            <Route exact path="/featured" component={Featured} />
            <Route
              exact
              path="/affliates"
              render={(props) => (
                <Affliates {...props} propdata={this.state.propdata} />
              )}
            />
            <Route
              exact
              path="/faq"
              render={(props) => (
                <FAQPAGE {...props} propdata={this.state.propdata} />
              )}
            />
            <Route exact path="/guardians" component={Guardians} />
            <Route exact path="/puppycontract" component={PuppyContract} />
            <Route
              exact
              path="/guardiancontract"
              component={GuardianContract}
            />

            <Route
              exact
              path="/rainbowbridge"
              render={(props) => (
                <RainbowBridge {...props} propdata={this.state.propdata} />
              )}
            />
          </div>
        </BrowserRouter>
        <Footer />
      </div>
    );
  }
}

export default App;
