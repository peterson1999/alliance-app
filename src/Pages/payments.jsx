import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import PaymentCards from '../components/PaymentCards';
class Payments extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<div style={{ textAlign: 'center', marginTop: 100 }}>
					<h1>Which fee do you want to pay?</h1>
				</div>
				<PaymentCards />
			</React.Fragment>
		);
	}
}

export default Payments;
