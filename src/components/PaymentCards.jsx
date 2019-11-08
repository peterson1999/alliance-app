import React, { Component } from "react";
import Pagination from "./Pagination";
import Pcards from "./Pcards";

const data = [
  {
    date: "October 9, 2019",
    violation: "Double Parking",
    description:
      "YOU DOUBLE PARKED! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
    deadline: "October 23, 2019 ",
    fine: 10000
  }
];

class PaymentCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      payments: data
    };
  }
  renderPayments = () => {
    console.log(this.state.payments);
    return this.state.payments.map(item => (
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
          <span style={{ marginRight: 10 }}>
            <b>{item.violation}</b>
          </span>
          {item.date}
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
            <p>{item.description}</p>
          </blockquote>
          <div style={{ fontSize: 30, marginBottom: 0, marginTop: 10 }}>
            Deadline: {item.deadline}
            <span style={{ float: "right" }}>PHP {item.fine}</span>
          </div>
          <div style={{ fontSize: 30, float: "right" }}>
            <button
              style={{ backgroundColor: "#90c3fb", fontSize: 30 }}
              type="button"
              className="btn"
              data-toggle="modal"
              data-target="#exampleModalCenter"
            >
              Pay
            </button>
          </div>
        </div>
      </div>
    ));
  };

  render() {
    return (
      <div
        style={{
          marginTop: 30
        }}
      >
        <hr />
        <div style={{ height: 800 }}>
          {/* <Pcards />
          <Pcards />
		  <Pcards /> */}
          {this.renderPayments()}
          <div
            style={{
              position: "absolute",
              bottom: "-43%",
              right: "43%"
            }}
          >
            <Pagination />
          </div>
        </div>
      </div>
    );
  }
}

export default PaymentCards;
