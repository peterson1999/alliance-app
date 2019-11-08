import React, { Component } from 'react';
import Cards from './Cards';

// import Icon from '@material-ui/core/Icon';

class Second extends Component {
	state = {};
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
		padding: 20,
		border: 'solid 0.5px',
		borderColor: '#c7c7c7'
	};
	handleCount = (counters) => {
		return counters.filter((count) => count.value > 0).length;
	};

	render() {
		return (
			<React.Fragment>
				<div style={this.div}>
					<div style={{ display: 'flex', flexDirection: 'row', marginTop: 40, marginBottom: 40 }}>
						<div
							style={{
								marginRight: 83,
								marginLeft: 83
							}}
						>
							<div style={this.wrapper} className="wrapper">
								<p style={{ marginBottom: 0, color: 'rgb(148, 148, 148)', fontSize: 28 }}>
									identifying information
								</p>
								{/* <div style={this.line} className="line" /> */}
							</div>
							<div
								className="Identity"
								style={{ display: 'flex', flexDirection: 'row', marginBottom: 15 }}
							>
								<div className="section" style={{ marginRight: 50, fontSize: 20 }}>
									{/* <div style={{ display: 'flex', flexDirection: 'row' }}>
										<div>
											<p className="paragraph">
												<span className="span1">First Name:</span>
											</p>
										</div>
										<div>
											<p>Peterson</p>
										</div>
									</div>
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
									</p> */}
									<table>
										<tr>
											<td style={{ width: 200 }}>
												<p>First Name:</p>
											</td>
											<td>
												<p style={{ color: 'rgb(148, 148, 148)' }}>Peterson</p>
											</td>
										</tr>
										<tr>
											<td>
												<p>Last Name:</p>
											</td>
											<td>
												<p style={{ color: 'rgb(148, 148, 148)' }}>Co</p>
											</td>
										</tr>
										<tr>
											<td>
												<p>Middle Name:</p>
											</td>
											<td>
												<p style={{ color: 'rgb(148, 148, 148)' }}>N.</p>
											</td>
										</tr>
										<tr>
											<td>
												<p>Contact Number:</p>
											</td>
											<td>
												<p style={{ color: 'rgb(148, 148, 148)' }}>09955646636</p>
											</td>
										</tr>
										<tr>
											<td>
												<p>Sex:</p>
											</td>
											<td>
												<p style={{ color: 'rgb(148, 148, 148)' }}>Male</p>
											</td>
										</tr>
										<tr>
											<td>
												<p>Address:</p>
											</td>
											<td>
												<p style={{ color: 'rgb(148, 148, 148)' }}>
													8 Prince Road. Nichol's Park Brgy.Guadalupe, Cebu City
												</p>
											</td>
										</tr>
									</table>
								</div>
							</div>
						</div>
						<div
							style={{
								marginRight: 83
							}}
						>
							{' '}
							<div style={this.wrapper} className="wrapper">
								<p style={{ marginBottom: 0, color: 'rgb(148, 148, 148)', fontSize: 28 }}>
									license information
								</p>
								{/* <div style={this.line} className="line" /> */}
							</div>
							<div
								className="License"
								style={{ display: 'flex', flexDirection: 'row', marginBottom: 30 }}
							>
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
							</div>
						</div>
					</div>
					<div style={this.wrapper} className="wrapper">
						<p style={{ marginBottom: 0, color: 'rgb(148, 148, 148)', fontSize: 28 }}>timeline</p>
						<div style={this.line} className="line" />
					</div>
					<Cards />
					<Cards />
					<Cards />
				</div>
			</React.Fragment>
		);
	}
}

export default Second;
