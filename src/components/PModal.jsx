import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { PayPalButton } from 'react-paypal-button-v2';

class PModal extends Component {
	render() {
		return (
			<Modal
				className="modal-container custom-map-modal"
				{...this.props}
				size="lg"
				aria-labelledby="contained-modal-title-vcenter"
				centered
				style={{
					opacity: '1'
				}}
			>
				{console.log(this.props.show)}
				<Modal.Header closeButton>
					<Modal.Title id="contained-modal-title-vcenter">Pay Fee</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<h4>PHP {this.props.fine}</h4>
					<div>
						<PayPalButton
							// currency="PHP"
							amount="0.01"
							onSuccess={(details, data) => {
								alert('Transaction completed by ' + details.payer.name.given_name);
							}}
						/>
					</div>
				</Modal.Body>
				<Modal.Footer>
					<Button onClick={this.props.onHide}>Close</Button>
				</Modal.Footer>
			</Modal>
		);
	}
}

export default PModal;
