import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Music from "./components/music/Music";
import Prime from "./components/prime/Prime";
import Graph from "./components/graph/Graph";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/music" component={Music} />
          <Route path="/prime" component={Prime} />
          <Route path="/graph" component={Graph} />
        </Switch>
      </div>
    );
  }
}

export default App;
