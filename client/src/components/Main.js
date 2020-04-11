import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import "./css/sidenavbar.css";
import "./js/template.js";
import "./js/off-canvas.js";
import Navbar from "./Navbar";
import Sidenavbar from "./Sidenavbar";
import Home from "./Home"
import Comments from "./Comments";
import Earnings from "./Earnings";
export class Main extends Component {
  render() {
    return (
      <div className="container-scroller" style={{height:'100vh',}}>
        <Navbar />
        <Router>
        <div class="container-fluid page-body-wrapper">
          <Sidenavbar />
          <div class="main-panel bg-light">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/comments">
              <Comments />
            </Route>
            <Route path="/earnings">
              <Earnings />
            </Route>
            

          </Switch>
          </div>
        </div>
        </Router>
      </div>
    );
  }
}

export default Main;
