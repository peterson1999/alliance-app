import React, { Component } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import axios from 'axios';

class Violations extends Component {
	constructor(props) {
		super(props);
		this.state = {
			notifs: []
		};
	}

	componentDidMount() {
		this.refresh();
	}

	refresh = () => {
		axios
			.get('/v1/notifications/?notification_type=V')
			.then((res) => this.setState({ notifs: res.data.results }))
			.catch((err) => console.log(err));
	};

	render() {
		return this.state.notifs.map((item, i) => (
			<React.Fragment key={i}>
				<div style={{ height: 66, backgroundColor: '#ff7f7f' }}>
					<Link to="/record">
						<p style={{ float: 'left', paddingTop: 12, color: 'white' }}>
							<i
								style={{
									fontSize: '2.5rem',
									margin: 'auto',
									borderRadius: '50%',
									backgroundColor: 'white',
									color: '#ff7f7f',
									marginLeft: 20,

									marginTop: 2
								}}
								className="material-icons text-warning"
							>
								directions_car
							</i>
							<span
								style={{
									position: 'relative',

									left: '24%',
									bottom: '18px'
								}}
							>
								{item.description}
							</span>
						</p>
						<p
							style={{
								position: 'absolute',
								left: '71%',
								top: '68%',
								fontSize: 10,
								color: 'white',
								width: 100
							}}
						/>
					</Link>
				</div>
			</React.Fragment>
		));
	}
}

export default Violations;
