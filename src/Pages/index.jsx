import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import First from '../components/First';
import Second from '../components/Second';
class Index extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />
				<main
					style={{
						fontFamily: 'Roboto',
						paddingTop: 90,
						float: 'left',
						width: '100%',
						height: '100%',
						paddingLeft: 60,
						backgroundColor: '#e9f7ff'
					}}
					className="row"
				>
					<div
						style={{
							maxWidth: 400,
							backgroundColor: 'white',
							boxShadow: '-8px 14px 4px 0px #a2a2a2',
							padding: 0
						}}
						className="col-sm-3"
					>
						<First />
					</div>
					<div style={{ marginLeft: 30 }} className="col-sm-8">
						<Second />
					</div>
				</main>
			</React.Fragment>
		);
	}
}

export default Index;
