import React, { Component } from "react";

class Violations extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div style={{ height: 66, backgroundColor: "#ff7f7f" }}>
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

                left: "18%",

                top: "17%"
              }}
            >
              Lorem,dojcdjcmaocmskmcskcas
            </span>
          </p>
          <p
            style={{
              position: "absolute",
              left: "71%",
              top: "23%",
              fontSize: "small",
              color: "white",
              width: 100
            }}
          >
            October 9, 2019
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default Violations;
