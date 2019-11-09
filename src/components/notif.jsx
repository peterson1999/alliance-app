import React, { Component } from "react";
import "./component css/Notif.css";
import Violations from "./Violation";
import Status from "./Status";
class Notif extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <div id="notificationContainer">
          <div id="notificationTitle">
            Notifications{" "}
            <button
              onClick={this.props.hideOverlay}
              style={{
                float: "right",
                border: "none",
                backgroundColor: "white"
              }}
            >
              X
            </button>
          </div>
          <div id="notificationsBody" class="notifications">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <Violations />
              </li>
              <li class="list-group-item">
                <Status />
              </li>
            </ul>
          </div>
          <div id="notificationFooter">
            <a href="#">See All</a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Notif;
