import React, { Component } from 'react';
import Pagination from './Pagination';
import Pcards from './Pcards';
class PaymentCards extends Component {
	state = {};
	render() {
		return (
			<div
				style={{
					marginTop: 30
				}}
			>
				<hr />
				<div style={{ height: 800 }}>
					<Pcards />
					<Pcards />
					<Pcards />
					<div
						style={{
							position: 'absolute',
							bottom: 0,
							right: '46%'
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
