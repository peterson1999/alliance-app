import React, { Component } from 'react';
class Cards extends Component {
	state = {
		card: {
			date: {
				month: 'October',
				day: 9,
				year: 2019
			},
			violation: 'Double Parking',
			description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.'
		}
	};
	render() {
		return (
			<div style={{ marginBottom: 30 }} className="card">
				<div style={{ backgroundColor: '#90c3fb' }} className="card-header card-primary">
					{' '}
					October 9, 2019
				</div>

				<div className="card-body">
					<blockquote className="blockquote mb-0">
						<p>{this.state.card.description}</p>
					</blockquote>
				</div>
			</div>
		);
	}
}

export default Cards;
