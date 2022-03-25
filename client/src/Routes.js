import React, { Component } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Footer from "./Components/footer";
import Header from "./Components/Header";
import CheckIn from "./Components/checkin";
import CheckOut from "./Components/checkout";
import Home from "./Components/Home";
import Logbook from "./Components/logbook";

class Routes extends Component {
  render() {
    return (
      <Router>
        <Header />
        
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/checkin" component={CheckIn} />
          <Route exact path="/checkout" component={CheckOut} />
          <Route exact path="/logbook" component={Logbook} />
        </Switch>
        <Footer/>
       
      </Router>
      
    );
  }
}
export default Routes;
