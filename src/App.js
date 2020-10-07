import React, { Component } from "react";
import "./App.scss";
import { Navigation } from "./component/nav";
import "bootstrap/dist/css/bootstrap.min.css";
import Puppies from "./pages/puppies";
import Home from "./pages/home";
import { Route, BrowserRouter } from "react-router-dom";
import Parents from "./pages/parents";
import About from "./pages/about";
import { Footer } from "./component/footer";
import Application from "./pages/application";
import BreedInfo from "./pages/breedinfo";
import RainbowBridge from "./pages/rainbowbridge";
import Poodles from "./component/poodles";
import Labradoodles from "./component/labradoodles";
import Goldendoodles from "./component/goldendoodles";
import Affliates from "./pages/affliates";
import Reviews from "./pages/reviews";
import Newlitter from "./pages/litter";
import FAQ from "./pages/faq";
import Guardians from "./pages/guardians";
import PuppyContract from './component/puppycontract'
import GuardianContract from "./component/guardianContract";

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
            <Navigation />
          </div>
          <div className="page">
            <Route
              exact
              path="/"
              render={(props) => (
                <Home {...props} propdata={this.state.propdata} />
              )}
            />
            <Route
              exact
              path="/puppies"
              render={(props) => (
                <Puppies {...props} propdata={this.state.propdata} />
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
              path="/litter"
              render={(props) => (
                <Newlitter {...props} propdata={this.state.propdata} />
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
            <Route exact path="/affliates" component={Affliates} />
            <Route exact path="/FAQ" component={FAQ} />
            <Route exact path="/guardians" component={Guardians} />
            <Route exact path="/puppycontract" component={PuppyContract} />
            <Route exact path="/guardiancontract" component={GuardianContract} />
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
