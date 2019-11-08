import React from 'react';
// import ReactDOM from 'react-dom';

class MyForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			license: '',
			fine: null,
			errormessage: '',
			description: '',
			violation: '',
			status: '',
			plate: ''
		};
	}
	myChangeHandler = (event) => {
		let nam = event.target.name;
		let val = event.target.value;
		let err = '';
		if (nam === 'fine') {
			if (val != '' && !Number(val)) {
				err = <strong>Your age must be a number</strong>;
			}
		}
		this.setState({ errormessage: err });
		this.setState({ [nam]: val });
	};

	render() {
		return (
			<form>
				<h1>
					Hello {this.state.license} {this.state.plate}
					{this.state.description} {this.state.violation}
					{this.state.age} {this.state.status}
				</h1>
				<p>Enter your License Number:</p>
				<input type="text" name="license" onChange={this.myChangeHandler} />
				<p>Enter Plate Number of Vehicle:</p>
				<input type="text" name="plate" onChange={this.myChangeHandler} />
				<p>Type of Violation</p>
				<select type="text" name="violation" onChange={this.myChangeHandler}>
					<option value="Ford">Ford</option>
					<option value="Volvo" selected>
						Volvo
					</option>
					<option value="Fiat">Fiat</option>
				</select>
				<p>Enter amount of fine:</p>
				<input type="text" name="fine" onChange={this.myChangeHandler} />
				{this.state.errormessage}
				<p>Status of Vehicle</p>
				<select type="text" name="status" onChange={this.myChangeHandler}>
					<option value="Ford">Ford</option>
					<option value="Volvo" selected>
						Volvo
					</option>
					<option value="Fiat">Fiat</option>
				</select>
				<p>Description of the Incident</p>
				<textarea
					style={{ borderTop: 'solid 0.1px' }}
					type="text"
					name="description"
					onChange={this.myChangeHandler}
				/>
			</form>
		);
	}
}
export default MyForm;
