import React, { Component } from 'react';
import './component css/Navbar.css';
import { Link } from 'react-router-dom';
import Notif from './notif';
class Navbar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showComponent: false
		};
		this.popup_ques = this.popup_ques.bind(this);
		this.hide_overlay = this.hide_overlay.bind(this);
	}

	popup_ques() {
		this.setState({
			showComponent: true
		});
	}

	hide_overlay() {
		this.setState({
			showComponent: false
		});
	}
	styles = {
		height: 60,
		backgroundColor: '#f7f7f7',
		borderBottom: 'solid',
		borderWidth: 0.1,
		borderColor: '#D3D3D3'
	};

	styles1 = {
		fontSize: 17,
		marginRight: 5,
		marginLeft: 5,
		paddingTop: 15
	};
	render() {
		return (
			<nav className="nav" style={this.styles} className="navbar navbar-expand-lg navbar-light fixed-top ">
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
				<div className="div" style={{ height: 60 }} className="collapse navbar-collapse" id="navbarCollapse">
					<div className="col-6">MyDrive</div>
					<ul
						className="ul col-6"
						style={{ marginRight: 0, float: 'right', height: 60, width: '60%' }}
						className="navbar-nav row"
					>
						<li style={{ textAlign: 'center' }} className="nav-item col-3">
							<Link style={this.styles1} className="nav-link" to="/">
								<i style={{ marginRight: 5 }} className="fa fa-lg fa-home" />
								<span>home</span>
							</Link>
						</li>
						<li style={{ textAlign: 'center' }} className="nav-item col-3">
							<Link style={this.styles1} className="nav-link" to="/record">
								<i style={{ marginRight: 5 }} className="fa fa-lg fa-address-card" />
								<span>record</span>
							</Link>
						</li>
						<li style={{ textAlign: 'center' }} className="nav-item col-3">
							<Link style={this.styles1} className="nav-link" to="/payments">
								<i style={{ marginRight: 5 }} className="fa fa-lg fa-credit-card" />
								fees
							</Link>
						</li>
						<li style={{ textAlign: 'center' }} className="nav-item col-3">
							<Link style={this.styles1} className="nav-link " onClick={this.popup_ques}>
								<i style={{ marginRight: 5 }} className="fa fa-lg fa-bell" />
								notifications
							</Link>
							{this.state.showComponent && <Notif hideOverlay={this.hide_overlay} />}
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Navbar;
