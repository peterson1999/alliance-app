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
				<main
					style={{ marginTop: 110, float: 'left', width: '100%', height: '100%', paddingLeft: 60 }}
					class="row"
				>
					<div style={{ maxWidth: '50%' }} class="col-sm-3">
						<First />
					</div>
					<div style={{ marginLeft: 30 }} class="col-sm-8">
						<Second />
					</div>
				</main>
			</React.Fragment>
		);
	}
}

export default Index;
