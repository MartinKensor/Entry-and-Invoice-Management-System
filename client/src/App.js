import React, { Component } from "react";
import Routes from "./Routes";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Routes />
      </div>
    );
  }
}

export default App;
