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
        <div id="notificationContainer" onClick={this.props.hideOverlay}>
          <div id="notificationTitle">Notifications</div>
          <div id="notificationsBody" class="notifications">
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <Violations />
              </li>
              <li class="list-group-item">
                <Status />
              </li>
              {/* <li class="list-group-item">Vestibulum at eros</li> */}
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
