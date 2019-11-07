import React, { Component } from 'react';
import './Score.css';
class Score extends Component {
	state = {
		score: {
			value: 19
		},
		stars: [
			{ id: 1, value: 'fa fa-star' },
			{ id: 2, value: 'fa fa-star' },
			{ id: 3, value: 'fa fa-star' },
			{ id: 4, value: 'fa fa-star' },
			{ id: 5, value: 'fa fa-star' }
		]
	};

	checkScore = () => {
		const rating = this.state.score.value / 4;
		return rating;
	};

	getStar = () => {
		const check = this.checkScore();
		const star = this.state.stars.map((c) => {
			if (c.id <= check) {
				c.value += ' checked';
			} else {
				c.value += '';
			}

			return c;
		});
		this.setState({ stars: star });
	};

	componentDidMount() {
		this.getStar();
	}
	render() {
		return (
			<React.Fragment>
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
				/>
				<div className="div" style={{ marginTop: 25, marginBottom: 25 }}>
					<h2 className="h2" style={{ fontSize: 20, color: 'skyblue' }}>
						Total Points: {this.state.score.value}{' '}
					</h2>

					{/* <Icon>star</Icon> */}
				</div>
				<div style={{ marginBottom: 25 }}>
					<span className="span" style={{ color: '#d6d3d3', fontSize: 25, marginRight: 10 }}>
						{this.state.stars.map((c) => <span className={c.value} />)}
					</span>
					<span style={{ fontSize: 20 }}>
						(<span>{this.checkScore()}</span>/5)
					</span>
				</div>
			</React.Fragment>
		);
	}
}

export default Score;
