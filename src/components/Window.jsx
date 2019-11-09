import React, { Component } from "react";

class Window extends Component {
  render() {
    return (
      <div
        onClick={this.props.hideOverlay}
        style={{
          position: "absolute",
          backgroundColor: "white",
          height: 250,
          width: 500,
          left: "-140%",
          border: "solid 1px",
          borderColor: "#808080",
          top: "18%"
        }}
      >
        <div style={{ backgroundColor: "skyblue", color: "white", padding: 5 }}>
          <p style={{ fontSize: 20, paddingTop: 5 }}>
            Status of Vehicle Updated{" "}
            <button
              onClick={this.props.hideOverlay}
              style={{
                float: "right",
                border: "none",
                backgroundColor: "skyblue",
                color: "white"
              }}
            >
              X
            </button>
          </p>
        </div>
        <div style={{ textAlign: "left", padding: 20, fontSize: 20 }}>
          <div style={{ padding: 10 }}>
            <span> Status:</span>
            <span style={{ color: "#808080" }}> {this.props.statement}</span>
          </div>
          <div style={{ padding: 10 }}>
            <span>Date:</span>
            <span style={{ color: "#808080" }}> {this.props.date}</span>
          </div>
          <div style={{ padding: 10 }}>
            <span>Location:</span>
            <span style={{ color: "#808080" }}> {this.props.location}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Window;
