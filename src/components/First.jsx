import React, { Component } from 'react';
import jungkook from './jungkook-1.jpg';
import Score from './Score';
import './First.css';
class First extends Component {
	state = {};

	handleCount = (counters) => {
		return counters.filter((count) => count.value > 0).length;
	};
	styles = {
		marginTop: 30,
		fontSize: 20
	};
	wrapper = {
		display: 'flex',
		alignItems: 'center',
		marginBottom: 17
	};

	line = {
		borderTop: 'solid',
		flexGrow: 1,
		borderWidth: 2,
		margin: 10,
		borderColor: '#808080'
	};
	render() {
		return (
			<div className="Body" style={{ backgroundColor: 'skyblue' }}>
				<div
					className="image"
					style={{
						textAlign: 'center'
						// borderRadius: 4,
						// borderWidth: 0.1,
						// borderColor: 'grey',
						// border: 'solid',
					}}
				>
					<img
						style={{
							height: 300,
							width: 300,
							borderRadius: '50%',
							marginTop: 20
						}}
						src={jungkook}
						alt=""
					/>
				</div>
				<div style={{ textAlign: 'center' }}>
					<h1 style={{ marginBottom: 0 }}>
						<strong>Peterson Co</strong>
					</h1>
					<p style={{ color: '#808080', fontSize: 25 }}>License</p>
					<Score />
				</div>
				{/* <div style={this.wrapper} className="wrapper">
					<p style={{ marginBottom: 0, color: 'rgb(0, 178, 222)', fontSize: 17 }}>Identifying Information</p>
					<div style={this.line} className="line" />
				</div>
				<div className="Identity" style={{ display: 'flex', flexDirection: 'row', marginBottom: 15 }}>
					<div className="section" style={{ marginRight: 50, fontSize: 20 }}>
						<p className="paragraph">
							<span className="span1">First Name:</span> Peterson
						</p>
						<p className="paragraph">
							<span className="span1">Last Name:</span> Co
						</p>
						<p className="paragraph">
							<span className="span1">Middle Name:</span> Ng
						</p>
						<p className="paragraph">
							<span className="span1">Contact Number:</span>
						</p>
						<p className="paragraph">
							<span className="span1">Sex:</span> M
						</p>
						<p className="paragraph">
							<span className="span1">Birthdate:</span> 04/05/99
						</p>
						<p className="paragraph">
							<span className="span1">Address:</span>
							<br />8 Prince Road. Nichol's Park <br />Brgy.Guadalupe, Cebu City
						</p>
					</div>
				</div>
				<div style={this.wrapper} className="wrapper">
					<p style={{ marginBottom: 0, color: 'rgb(0, 178, 222)', fontSize: 17 }}>License Information</p>
					<div style={this.line} className="line" />
				</div>
				<div className="License" style={{ display: 'flex', flexDirection: 'row', marginBottom: 30 }}>
					<div className="section" style={{ marginRight: 50, fontSize: 20 }}>
						<p className="paragraph">
							<span className="span1">License Type:</span> (License)
						</p>
						<p className="paragraph">
							<span className="span1">Date Issued:</span> 04/06/98
						</p>
						<p className="paragraph">
							<span className="span1">Date of Expiry:</span> 04/08/32
						</p>
					</div>
				</div> */}
			</div>
		);
	}
}

export default First;
