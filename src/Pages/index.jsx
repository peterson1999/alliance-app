import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import First from '../components/MVR/First';
import Second from '../components/MVR/Second';
class Index extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<link href="https://fonts.googleapis.com/css?family=Quicksand&display=swap" rel="stylesheet" />
				<main
					style={{
						fontFamily: 'Roboto',
						paddingTop: 90,
						float: 'left',
						width: '102%',
						height: '100%',
						paddingLeft: 60,
						backgroundColor: '#e9f7ff',
						paddingLeft: 110
					}}
					className="row"
				>
					<Second />
				</main>
			</React.Fragment>
		);
	}
}

export default Index;
