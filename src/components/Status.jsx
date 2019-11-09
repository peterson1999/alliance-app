import React, { Component } from 'react';
import Window from './Window';
import axios from 'axios';
import { statement } from '@babel/template';
class Status extends Component {
	constructor(props) {
		super(props);

		this.state = {
			showComponent: false,
			notifs: []
		};
		this.popup_ques1 = this.popup_ques1.bind(this);
		this.hide_overlay1 = this.hide_overlay1.bind(this);
	}

	componentDidMount() {
		this.refresh();
	}

	refresh = () => {
		axios
			.get('/v1/notifications/?notification_type=S')
			.then((res) => this.setState({ notifs: res.data.results }))
			.catch((err) => console.log(err));
	};

	popup_ques1() {
		this.setState({
			showComponent: true
		});
	}

	statement() {
		const statement = this.state.notiftext;
		return statement;
	}

	date() {
		const date = this.state.date;
		return date;
	}

	location() {
		const location = this.state.location;
		return location;
	}

	hide_overlay1() {
		this.setState({
			showComponent: false
		});
	}
	render() {
		return this.state.notifs.map((item, i) => (
			<React.Fragment key={i}>
				<div style={{ height: 66, backgroundColor: '#64dd64' }} onClick={this.popup_ques1}>
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
							className="material-icons text-success"
						>
							directions_car
						</i>
						<span
							style={{
								position: 'absolute',

								left: '24%',

								top: '36%'
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
				</div>

				{this.state.showComponent && (
					<Window
						date="November 9, 2019"
						statement={item.description}
						location="Cebu City"
						hideOverlay={this.hide_overlay1}
					/>
				)}
			</React.Fragment>
		));
	}
}

export default Status;
