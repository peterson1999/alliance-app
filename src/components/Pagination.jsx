import React, { Component } from 'react';
import './Pagination.css';
class Pagination extends Component {
	state = {};
	render() {
		return (
			<div className="div">
				<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css" />
				{/* <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js" />
				<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js" /> */}
				<ul className="pagination">
					<li className="list">
						<a className="a" href="#">
							1
						</a>
					</li>
					<li>
						<a href="#">2</a>
					</li>
					<li>
						<a href="#">3</a>
					</li>
					<li>
						<a href="#">4</a>
					</li>
					<li>
						<a href="#">5</a>
					</li>
				</ul>
			</div>
		);
	}
}

export default Pagination;
