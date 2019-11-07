import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import PaymentCards from '../components/PaymentCards';
class Payments extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />
				<Navbar />

				<main
					style={{
						fontFamily: 'Roboto',
						marginTop: 90,
						float: 'left',
						width: '100%',
						height: '100%',
						paddingLeft: 60
					}}
					className="row"
				>
					<div style={{ textAlign: 'center' }}>
						<h1>Which fee do you want to pay?</h1>
					</div>
					<PaymentCards />
				</main>
			</React.Fragment>
		);
	}
}

export default Payments;
