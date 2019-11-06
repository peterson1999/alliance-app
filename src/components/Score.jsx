import React, { Component } from 'react';

class Score extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
				/>
				<div style={{ marginTop: 100, marginBottom: 100 }}>
					<h2 style={{}}>
						Total Points: 0{' '}
						<span style={{ marginLeft: 30, marginRight: 10 }}>
							<span class="fa fa-star checked" />
							<span class="fa fa-star checked" />
							<span class="fa fa-star checked" />
							<span class="fa fa-star" />
							<span class="fa fa-star" />
						</span>
						(0/5)
					</h2>
					{/* <Icon>star</Icon> */}
				</div>
			</React.Fragment>
		);
	}
}

export default Score;
