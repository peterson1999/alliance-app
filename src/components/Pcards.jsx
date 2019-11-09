import React, { Component } from "react";
class Pcards extends Component {
  state = {
    card: {
      date: {
        month: "October",
        day: 9,
        year: 2019
      },
      violation: "Double Parking",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
      Deadline: {
        month: "October",
        day: 23,
        year: 2019
      },
      fine: 10000
    }
  };
  render() {
    return (
      <div
        style={{
          marginBottom: 20,
          marginLeft: 10,
          borderRadius: 10,
          marginRight: 10
        }}
        className="card"
      >
        <div
          style={{ fontSize: 30, backgroundColor: "#90c3fb" }}
          className="card-header card-primary"
        >
          {" "}
          <span style={{ marginRight: 10 }}>(Type of Parking Fee)</span>
          October 9, 2019
        </div>
        <div className="card-body">
          <blockquote
            style={{
              fontSize: 30,
              borderLeft: "solid",
              borderColor: "#3dcc4f",
              marginBottom: 10
            }}
            className="blockquote mb-0"
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere erat a antefnjafsdfndjfn;sanfds;kfndskfnas;dfn;ds.
            </p>
          </blockquote>
          <div style={{ fontSize: 30, marginBottom: 0, marginTop: 10 }}>
            Deadline: (Date)<span style={{ float: "right" }}>PHP 10000.00</span>
          </div>
          <div style={{ fontSize: 30, float: "right" }}>
            <button
              style={{ backgroundColor: "#90c3fb", fontSize: 30 }}
              type="button"
              className="btn"
            >
              Primary
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Pcards;
