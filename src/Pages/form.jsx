import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import MyForm from './form1';
import './pages css/forms.css';
class Forms extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />
				<main style={{}}>
					<div
						style={{
							textAlign: 'center',
							paddingBottom: 10,
							paddingTop: 10,
							backgroundColor: 'skyblue'
						}}
					>
						<h1>Report a Violation</h1>
					</div>
					<hr style={{ borderTop: '3px solid rgba(0, 0, 0, 0.1)' }} />
					<div
						style={{
							textAlign: 'center',
							margin: '0px 32%',
							textAlign: 'center',

							border: 'solid'
						}}
					>
						<div
							style={{
								border: 'solid 1.4px',
								borderColor: 'darkgrey'
							}}
							class="card"
						>
							<h5
								style={{
									backgroundColor: 'skyblue',
									color: 'white',
									fontSize: 35
								}}
								class="card-header info-color white-text text-center py-4"
							>
								<strong>Report Form</strong>
							</h5>
						</div>
						<MyForm />
					</div>
				</main>
			</React.Fragment>
		);
	}
}

export default Forms;
