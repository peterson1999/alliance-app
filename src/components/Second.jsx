import React, { Component } from 'react';
import Cards from './Cards';
import Score from './Score';
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
	handleCount = (counters) => {
		return counters.filter((count) => count.value > 0).length;
	};

	render() {
		return (
			<div styles={{ marginLeft: 30 }}>
				<h1>Peterson Co</h1>
				<p style={{ color: '#0099CC', fontSize: 30 }}>License</p>
				<Score />
				<div style={this.wrapper} className="wrapper">
					<p style={{ marginBottom: 0, color: '#808080', fontSize: 20 }}>Timeline</p>
					<div style={this.line} class="line" />
				</div>
				<Cards />
				<Cards />
				<Cards />
			</div>
		);
	}
}

export default Second;
