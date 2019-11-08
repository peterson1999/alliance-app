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

	div = {
		backgroundColor: 'white',
		padding: 20
	};
	handleCount = (counters) => {
		return counters.filter((count) => count.value > 0).length;
	};

	render() {
		return (
			<React.Fragment>
				<div style={this.div}>
					<div className="div1" styles={this.div}>
						<h1 style={{ marginBottom: 0 }}>
							<strong>Peterson Co</strong>
						</h1>
						<p style={{ color: '#808080', fontSize: 25 }}>License</p>
						<Score />
						<div style={this.wrapper} className="wrapper">
							<p style={{ marginBottom: 0, color: 'rgb(0, 178, 222)', fontSize: 17 }}>Timeline</p>
							<div style={this.line} className="line" />
						</div>
						<Cards />
						<Cards />
						<Cards />
					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default Second;
