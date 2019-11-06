import React, { Component } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
class Navbar extends Component {
	state = {};
	styles = {
		height: 60,
		backgroundColor: 'white',
		borderBottom: 'solid',
		borderWidth: 0.1,
		borderColor: '#D3D3D3'
	};

	styles1 = {
		fontSize: 25,
		marginRight: 30,
		marginLeft: 30,
		paddingTop: 12
	};
	render() {
		return (
			<nav className="nav" style={this.styles} class="navbar navbar-expand-lg navbar-light fixed-top ">
				<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
				/>
				{/* <a style={this.styles1} class="navbar-brand" href="#">
					Fixed navbar
				</a>
				<button
					class="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarCollapse"
					aria-controls="navbarCollapse"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon" />
				</button>
				<form style={{ marginLeft: 250 }} class="form-inline mt-2 mt-md-0">
					<input
						style={{ fontSize: 20 }}
						class="form-control mr-sm-2"
						type="text"
						placeholder="Search"
						aria-label="Search"
					/>
					<button class="btn btn-outline-success my-2 my-sm-0" type="submit">
						Search
					</button>
				</form> */}
				<div className="div" style={{ height: 60 }} class="collapse navbar-collapse" id="navbarCollapse">
					<ul className="ul" style={{ height: 60, width: '100%' }} class="navbar-nav mr-auto row">
						<li style={{ textAlign: 'center' }} class="nav-item col-4">
							<Link style={this.styles1} class="nav-link" to="/">
								<i style={{ marginRight: 20 }} class="fa fa-lg fa-address-card" />
								<span>Motor Vehicle Record</span>
							</Link>
						</li>
						<li style={{ textAlign: 'center' }} class="nav-item col-4">
							<Link style={this.styles1} class="nav-link" to="/payments">
								<i style={{ marginRight: 20 }} class="fa fa-lg fa-credit-card" />
								Pay My Fees
							</Link>
						</li>
						<li style={{ textAlign: 'center' }} class="nav-item col-4">
							<Link style={this.styles1} class="nav-link " to="/notifications">
								<i style={{ marginRight: 20 }} class="fa fa-lg fa-bell" />
								Notifications
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Navbar;
