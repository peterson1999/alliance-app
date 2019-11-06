import React, { Component } from 'react';
class Cards extends Component {
	state = {};
	render() {
		return (
			<div style={{ marginBottom: 30 }} class="card">
				<div style={{ backgroundColor: '#90c3fb' }} class="card-header card-primary">
					{' '}
					October 9, 2019
				</div>
				<div class="card-body">
					<blockquote class="blockquote mb-0">
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
					</blockquote>
				</div>
			</div>
		);
	}
}

export default Cards;
