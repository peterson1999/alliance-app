import React from "react";
// import ReactDOM from 'react-dom';
import "./pages css/forms.css";
import DateTimePicker from "react-datetime-picker";
import "react-datepicker/dist/react-datepicker.css";
class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      license: "",
      fine: null,
      errormessage: "",
      description: "",
      violation: "",
      status: "",
      plate: "",
      startDate: new Date(),
      dueDate: new Date()
    };
  }

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };
  handleDeadlineChange = date => {
    this.setState({
      dueDate: date
    });
  };
  myChangeHandler = event => {
    let nam = event.target.name;
    let val = event.target.value;
    let err = "";
    if (nam === "fine") {
      if (val != "" && !Number(val)) {
        err = <strong>Your fine must be a number</strong>;
      }
    }
    this.setState({ errormessage: err });
    this.setState({ [nam]: val });
  };

  render() {
    return (
      <form>
        <div>
          <p>Enter License Number:</p>
          <input type="text" name="license" onChange={this.myChangeHandler} />
        </div>
        <div>
          <p>Enter Plate Number of Vehicle:</p>
          <input type="text" name="plate" onChange={this.myChangeHandler} />
        </div>
        <div>
          <p>Date of Incident</p>
          <DateTimePicker
            value={this.state.startDate}
            onChange={this.handleChange}
            name="startDate"
          />
        </div>
        <div>
          <p>Type of Violation</p>
          <select type="text" name="violation" onChange={this.myChangeHandler}>
            <option value="Ford">Ford</option>
            <option value="Volvo" selected>
              Volvo
            </option>
            <option value="Fiat">Fiat</option>
          </select>
        </div>
        <div>
          <p>Enter amount of fine:</p>
          <input type="text" name="fine" onChange={this.myChangeHandler} />
          <span style={{ marginLeft: 10 }}>{this.state.errormessage}</span>
        </div>
        <div>
          <p>Date Due</p>
          <DateTimePicker
            value={this.state.dueDate}
            onChange={this.handleDeadlineChange}
            name="startDate"
          />
        </div>
        <div>
          <p>Status of Vehicle</p>
          <select type="text" name="status" onChange={this.myChangeHandler}>
            <option value="Ford">Ford</option>
            <option value="Volvo" selected>
              Volvo
            </option>
            <option value="Fiat">Fiat</option>
          </select>
        </div>
        <div>
          <p>Description of the Incident</p>
          <textarea
            style={{ borderTop: "solid 0.1px", height: 200, width: 400 }}
            type="text"
            name="description"
            onChange={this.myChangeHandler}
          />
        </div>
      </form>
    );
  }
}
export default MyForm;
