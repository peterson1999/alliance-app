import React, { Component } from 'react';
import Score from './Score';
import jungkook from '../component images/jungkook-1.jpg';
import axios from 'axios';

// import Icon from '@material-ui/core/Icon';

class Second extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modalLShow: false,
			infoID: [],
			infoLI: [],
			violations: []
		};
	}

	componentDidMount() {
		this.refresh();
	}

	refresh = () => {
		axios
			.get('/v1/profiles/')
			.then((res) => this.setState({ infoID: res.data.results }))
			.catch((err) => console.log(err));
		axios
			.get('/v1/licenses/')
			.then((res) => this.setState({ infoLI: res.data.results }))
			.catch((err) => console.log(err));
		axios
			.get('/v1/violations/')
			.then((res) => this.setState({ violations: res.data.results }))
			.catch((err) => console.log(err));
	};

	renderProf = () => {
		return this.state;
	};

	renderInfo = () => {
		return this.state.infoID.map((item, i) => (
			<div
				key={i}
				style={{
					marginRight: 0,
					marginLeft: 60,
					width: '50%'
				}}
			>
				<div style={this.wrapper} className="wrapper">
					<p style={{ marginBottom: 0, color: 'rgb(148, 148, 148)', fontSize: 28 }}>
						Identifying Information
					</p>
				</div>
				<div className="Identity" style={{ display: 'flex', flexDirection: 'row', marginBottom: 15 }}>
					<div className="section" style={{ marginRight: 50, fontSize: 20 }}>
						<table>
							<tr>
								<td style={{ width: 200 }}>
									<p>First Name:</p>
								</td>
								<td>
									<p style={{ color: 'rgb(148, 148, 148)' }}>{item.first_name}</p>
								</td>
							</tr>
							<tr>
								<td>
									<p>Last Name:</p>
								</td>
								<td>
									<p style={{ color: 'rgb(148, 148, 148)' }}>{item.last_name}</p>
								</td>
							</tr>
							<tr>
								<td>
									<p>Middle Name:</p>
								</td>
								<td>
									<p style={{ color: 'rgb(148, 148, 148)' }}>{item.middle_name}</p>
								</td>
							</tr>
							<tr>
								<td>
									<p>Contact Number:</p>
								</td>
								<td>
									<p style={{ color: 'rgb(148, 148, 148)' }}>{item.contact_number}</p>
								</td>
							</tr>
							<tr>
								<td>
									<p>Sex:</p>
								</td>
								<td>
									<p style={{ color: 'rgb(148, 148, 148)' }}>{item.sex}</p>
								</td>
							</tr>
							<tr>
								<td>
									<p>Address:</p>
								</td>
								<td>
									<p style={{ color: 'rgb(148, 148, 148)' }}>{item.address}</p>
								</td>
							</tr>
							<tr>
								<td>
									<p>Nationality:</p>
								</td>
								<td>
									<p style={{ color: 'rgb(148, 148, 148)' }}>{item.nationality}</p>
								</td>
							</tr>
							<tr>
								<td>
									<p>Height and Weight:</p>
								</td>
								<td>
									<p style={{ color: 'rgb(148, 148, 148)' }}>
										{item.height} cm, {item.weight}kg
									</p>
								</td>
							</tr>
						</table>
					</div>
				</div>
			</div>
		));
	};

	renderLicense = () => {
		return this.state.infoLI.map((item, i) => (
			<div
				key={i}
				style={{
					marginRight: 40,
					width: '50%'
				}}
			>
				{' '}
				<div style={this.wrapper} className="wrapper">
					<p style={{ marginBottom: 0, color: 'rgb(148, 148, 148)', fontSize: 28 }}>License Information</p>
					{/* <div style={this.line} className="line" /> */}
				</div>
				<div className="License" style={{ display: 'flex', flexDirection: 'row', marginBottom: 30 }}>
					<div className="section" style={{ fontSize: 20 }}>
						<table>
							<tr>
								<td style={{ width: 200 }}>
									<p>License Number</p>
								</td>
								<td>
									<p style={{ color: 'rgb(148, 148, 148)' }}>{item.license_number}</p>
								</td>
							</tr>
							<tr>
								<td>
									<p>Restriction Numbers:</p>
								</td>
								<td>
									<p style={{ color: 'rgb(148, 148, 148)' }}>({item.license_number})</p>
								</td>
							</tr>
							<tr>
								<td>
									<p>Date Issued:</p>
								</td>
								<td>
									<p style={{ color: 'rgb(148, 148, 148)' }}>
										{new Date(item.date_issued).toLocaleDateString('en-US', {
											year: 'numeric',
											month: 'long',
											day: 'numeric'
										})}
									</p>
								</td>
							</tr>
							<tr>
								<td>
									<p>Date of Expiry:</p>
								</td>
								<td>
									<p style={{ color: 'rgb(148, 148, 148)' }}>
										{new Date(item.date_of_expiry).toLocaleDateString('en-US', {
											year: 'numeric',
											month: 'long',
											day: 'numeric'
										})}
									</p>
								</td>
							</tr>
							<tr>
								<td>
									<p>Agency:</p>
								</td>
								<td>
									<p style={{ color: 'rgb(148, 148, 148)' }}>{item.agency_code}</p>
								</td>
							</tr>
							<tr>
								<td>
									<p>Conditions:</p>
								</td>
								<td>
									<p style={{ color: 'rgb(148, 148, 148)' }}>{item.condition_code}</p>
								</td>
							</tr>
						</table>
					</div>
				</div>
			</div>
		));
	};

	renderViolations = () => {
		console.log(this.state.violations);
		return this.state.violations.map((item, i) => (
			<div key={i} style={{ marginBottom: 30 }} className="card">
				<div style={{ backgroundColor: '#90c3fb' }} className="card-header card-primary">
					<b>{item.name}</b>-&nbsp;&nbsp;
					{new Date(item.datetime_issued).toLocaleDateString('en-US', {
						year: 'numeric',
						month: 'long',
						day: 'numeric'
					})}
				</div>

				<div className="card-body">
					<blockquote className="blockquote mb-0">
						<p>{item.description}</p>
					</blockquote>
				</div>
			</div>
		));
	};

	wrapper = {
		display: 'flex',
		alignItems: 'center',
		marginBottom: 30
	};

	line = {
		borderTop: 'solid',
		flexGrow: 1,
		borderWidth: 2,
		margin: 10,
		borderColor: '#808080'
	};

	div = {
		backgroundColor: 'white',

		border: 'solid 0.5px',
		borderColor: '#c7c7c7'
	};
	handleCount = (counters) => {
		return counters.filter((count) => count.value > 0).length;
	};

	render() {
		return (
			<React.Fragment>
				<div
					style={{
						maxWidth: 400,
						backgroundColor: 'white',
						boxShadow: '-8px 14px 4px 0px #a2a2a2',
						padding: 0,
						height: 590
					}}
					className="col-sm-3"
				>
					<link href="https://fonts.googleapis.com/css?family=Quicksand&display=swap" rel="stylesheet" />
					<div className="Body" style={{ backgroundColor: 'skyblue', paddingBottom: 1 }}>
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
							<h1
								style={{
									marginBottom: 12,
									fontSize: 30
								}}
							>
								<strong>PETERSON CO</strong>
							</h1>
							<p style={{ color: 'rgb(249, 249, 249)', fontSize: 25 }}>License</p>
							<Score />
						</div>
					</div>
				</div>

				<div style={{ marginLeft: 30 }} className="col-sm-8">
					<div style={this.div}>
						<div style={{ display: 'flex', flexDirection: 'row', marginTop: 40, marginBottom: 40 }}>
							{this.renderInfo()}
							{this.renderLicense()}
						</div>
						<div style={{ padding: 60 }}>
							<div style={this.wrapper} className="wrapper">
								<p style={{ marginBottom: 0, color: 'rgb(148, 148, 148)', fontSize: 28 }}>timeline</p>
								<div style={this.line} className="line" />
							</div>
							{this.renderViolations()}
						</div>
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Second;
