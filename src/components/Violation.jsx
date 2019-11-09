import React, { Component } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

class Violations extends Component {
  state = {
    notiftext: "Lorem,dojcdjcmaocmskmcskcas",
    date: "October 9, 2019"
  };
  render() {
    return (
      <React.Fragment>
        <div style={{ height: 66, backgroundColor: "#ff7f7f" }}>
          <Link to="/record">
            <p style={{ float: "left", paddingTop: 12, color: "white" }}>
              <i
                style={{
                  fontSize: "2.5rem",
                  margin: "auto",
                  borderRadius: "50%",
                  backgroundColor: "white",
                  color: "#ff7f7f",
                  marginLeft: 20,

                  marginTop: 2
                }}
                className="material-icons text-warning"
              >
                directions_car
              </i>
              <span
                style={{
                  position: "absolute",

                  left: "24%",

                  top: "36%"
                }}
              >
                {this.state.notiftext}
              </span>
            </p>
            <p
              style={{
                position: "absolute",
                left: "71%",
                top: "68%",
                fontSize: 10,
                color: "white",
                width: 100
              }}
            >
              {this.state.date}
            </p>
          </Link>
        </div>
      </React.Fragment>
    );
  }
}

export default Violations;
