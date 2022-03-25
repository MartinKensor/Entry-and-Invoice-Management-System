import React, { Component } from "react";
import axios from "axios";
import styles from "../css/table.css";

class Logbook extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: []
    };
  }
  componentDidMount() {
    axios
      .get("http://localhost:3003/logbook")
      .then(json => {
        this.setState({
          details: json.data.data
        });
      })
      .catch(err => {
        console.log(err, "Error in loading logbook");
      });
  }

  render() {
    const { details } = this.state;
    return (
      <div className="container">
        {" "}
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Guest Name</th>
              <th>Guest Contact</th>
              <th>Host Name</th>
              <th>Host Contact</th>
              <th>Check-In Time</th>
              <th>Check-Out Time</th>
            </tr>
          </thead>
          <tbody>
            {details.map(logbook => (
              <tr key={logbook}>
                <td>{logbook.Guest_name}</td>
                <td>{logbook.Guest_phone}</td>
                <td>{logbook.Host_name}</td>
                <td>{logbook.Host_phone}</td>
                <td>{logbook.Checkin_time}</td>
                <td>{logbook.Checkout_time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Logbook;
