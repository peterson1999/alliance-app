import React, { Component } from "react";
import Window from "./Window";
import { statement } from "@babel/template";
class Status extends Component {
  state = {};
  constructor(props) {
    super(props);

    this.state = {
      showComponent: false,
      notiftext: "Lorem,dojcdjcmaocmskmcskcas",
      date: "October 9, 2019",
      location: "location"
    };
    this.popup_ques1 = this.popup_ques1.bind(this);
    this.hide_overlay1 = this.hide_overlay1.bind(this);
  }

  popup_ques1() {
    this.setState({
      showComponent: true
    });
  }

  statement() {
    const statement = this.state.notiftext;
    return statement;
  }

  date() {
    const date = this.state.date;
    return date;
  }

  location() {
    const location = this.state.location;
    return location;
  }

  hide_overlay1() {
    this.setState({
      showComponent: false
    });
  }
  render() {
    return (
      <React.Fragment>
        <div
          style={{ height: 66, backgroundColor: "#64dd64" }}
          onClick={this.popup_ques1}
        >
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
              className="material-icons text-success"
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
        </div>

        {this.state.showComponent && (
          <Window
            date={this.date()}
            statement={this.statement()}
            location={this.location()}
            hideOverlay={this.hide_overlay1}
          />
        )}
      </React.Fragment>
    );
  }
}

export default Status;
