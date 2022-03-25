import React, { Component } from "react";
import "../css/home.css";
import Tilt from "react-tilt";
import { Button } from "reactstrap";

class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="bg">
        <div className="container">
          <p className="heading">Entry Management</p>
          <Tilt
                        className="br2 shadow-2"
                        options={{ max: 0 }}
                       
                      >
          <div style={{ marginLeft: "39%", marginTop: "-3%" }}>
       
            <Button className="button" href="/checkin">
              CheckIn
            </Button>
            <Button className="button" href="/checkout">
              CheckOut
            </Button>
            <Button className="button" href="/logbook">
              Logbook
            </Button>
           
          </div>
</Tilt>          

        </div>
      </div>
    );
  }
}

export default Home;
