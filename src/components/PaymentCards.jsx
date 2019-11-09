import React, { Component, useState } from 'react';
import Pagination from './Pagination';
import PModal from './PModal.jsx';
import axios from 'axios';
import Pcards from './Pcards';

const data = [
	{
		violation: 'Double Parking',
		description:
			'YOU DOUBLE PARKED! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.',
		deadline: 'October 23, 2019 ',
		fine: 10000
	}
];
class PaymentCards extends Component {
	constructor(props) {
		super(props);
		this.state = {
			modalPShow: false,
			payments: []
		};
	}

	componentDidMount() {
		this.refresh();
	}

	refresh = () => {
		axios
			.get('/v1/fees/')
			.then((res) => this.setState({ payments: res.data.results }))
			.catch((err) => console.log(err));
	};

	renderPayments = () => {
		const newPay = this.state.payments;
		console.log(this.state.payments);
		return newPay.map((item, i) => (
			<div
				style={{
					marginBottom: 20,
					marginLeft: 10,
					borderRadius: 10,
					marginRight: 10
				}}
				className="card"
				key={i}
			>
				<div style={{ fontSize: 30, backgroundColor: '#90c3fb' }} className="card-header card-primary">
					{' '}
					<span style={{ marginRight: 10 }}>
						<b>{item.violation}</b>
					</span>
				</div>
				<div className="card-body">
					<blockquote
						style={{
							fontSize: 30,
							borderLeft: 'solid',
							borderColor: '#3dcc4f',
							marginBottom: 10
						}}
						className="blockquote mb-0"
					>
						<p>{item.description}</p>
					</blockquote>
					<div style={{ fontSize: 30, marginBottom: 0, marginTop: 10 }}>
						Deadline: {item.deadline}
						<span style={{ float: 'right' }}>PHP {item.fine}</span>
					</div>
					<div style={{ fontSize: 30, float: 'right' }}>
						<button
							style={{ backgroundColor: '#90c3fb', fontSize: 30 }}
							type="button"
							className="btn"
							onClick={() => this.setState({ modalPShow: true })}
						>
							{/* <PayPalButton
								// currency="PHP"
								amount={item.fine}
								onSuccess={(details, data) => {
									alert('Transaction completed by ' + details.payer.name.given_name);
								}}
							/> */}
							Pay
						</button>

						<PModal
							fine={item.fine}
							show={this.state.modalPShow}
							onHide={() => this.setState({ modalPShow: false })}
						/>
					</div>
				</div>
			</div>
		));
	};

	render() {
		return (
			<div
				style={{
					marginTop: 30
				}}
			>
				<hr />
				<div style={{ height: 800 }}>
					{/* <Pcards />
          <Pcards />
		  <Pcards /> */}
					{this.renderPayments()}
					<div
						style={{
							position: 'absolute',
							bottom: '-43%',
							right: '43%'
						}}
					>
						<Pagination />
					</div>
				</div>
			</div>
		);
	}
}

export default PaymentCards;
