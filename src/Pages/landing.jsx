import React, { Component } from 'react';
import Navbar from '../components/Navbar';
import './pages css/landing.css';
import record from './pages images/record.png';
import pay from './pages images/pay.jpg';
import notify from './pages images/notify.jpg';
import highway from './pages images/highway.jpg';
import { Link } from 'react-router-dom';
class Home extends Component {
	state = {};
	render() {
		return (
			<React.Fragment>
				<Navbar />
				<link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet" />
				<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

				{/* <main
					style={{
						fontFamily: 'Roboto',
						marginTop: 90,
						float: 'left',
						width: '100%',
						height: '100%',
						paddingLeft: 60
					}}
					className="row"
				> */}
				<header
					style={{ backgroundColor: '#808080', backgroundImage: `url(${highway})` }}
					className="masthead text-white text-center"
				>
					{/* <div className="overlay" /> */}
					<div className="container">
						<div className="row">
							<div style={{ marginTop: 250, zIndex: 2 }} lassName="col-xl-9 mx-auto">
								<h1 style={{ fontSize: 56, fontWeight: 700 }} className="mb-5">
									Have better control, security, and monitoring of your life as a driver!
								</h1>
							</div>
							<div
								style={{ marginBottom: 250, lineHeight: 1.2 }}
								className="col-md-10 col-lg-8 col-xl-7 mx-auto"
							>
								{/* <form>
									<div className="form-row">
										<div className="col-12 col-md-9 mb-2 mb-md-0">
											<input
												type="email"
												className="form-control form-control-lg"
												placeholder="Enter your email..."
											/>
										</div>
										<div className="col-12 col-md-3">
											<button type="submit" className="btn btn-block btn-lg btn-primary">
												Sign up!
											</button>
										</div>
									</div>
								</form> */}
								<p style={{ opacity: 0.7, fontSize: 22 }}>
									A new and convenient way for Filipinos to document their driving experience ensuring
									their rights as a vehicle owner.
								</p>
							</div>
						</div>
					</div>
				</header>
				<section
					style={{ paddingTop: '7rem', paddingBottom: '7rem' }}
					className="features-icons bg-light text-center"
				>
					<div className="container">
						<div className="row">
							<div className="col-lg-4">
								<div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
									<div style={{ fontWeight: 700 }} className="features-icons-icon d-flex">
										<i
											style={{ fontSize: '5.5rem', margin: 'auto', marginBottom: 20 }}
											className="material-icons text-primary"
										>
											desktop_windows
										</i>
									</div>
									<h3>Intelligent Profile</h3>
									<p className="lead mb-0">
										Tracks your record, provides updates, and digitizes your transactions!
									</p>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="features-icons-item mx-auto mb-5 mb-lg-0 mb-lg-3">
									<div className="features-icons-icon d-flex">
										<i
											style={{ fontSize: '5.5rem', margin: 'auto', marginBottom: 20 }}
											className="material-icons text-primary"
										>
											assignment
										</i>
									</div>
									<h3>Motor Vehicle Record</h3>
									<p className="lead mb-0">
										Records your timeline and calculates your driver points!
									</p>
								</div>
							</div>
							<div className="col-lg-4">
								<div className="features-icons-item mx-auto mb-0 mb-lg-3">
									<div className="features-icons-icon d-flex">
										<i
											style={{ fontSize: '5.5rem', margin: 'auto', marginBottom: 20 }}
											className="material-icons text-primary"
										>
											airplanemode_active
										</i>
									</div>
									<h3>Use it Anywhere</h3>
									<p className="lead mb-0">
										Ready to use whenever and wherever, your personal assistant at the click of a
										button!
									</p>
								</div>
							</div>
						</div>
					</div>
				</section>

				{/* images */}
				<section className="showcase">
					<div className="container-fluid p-0">
						<div className="row no-gutters">
							<div className="col-lg-6 order-lg-2 text-white showcase-img">
								<img style={{ height: '100%', width: '100%' }} src={record} alt="" />
							</div>
							<div className="col-lg-6 order-lg-1 my-auto showcase-text">
								<h2>Motor Vehicle Record</h2>
								<p className="lead mb-0">
									Get to see your timeline of violations and payments with all your details in one
									place. Learn from your past mistakes and be a better driver.
								</p>
								<div style={{ marginTop: 20 }}>
									<Link style={{ fontWeight: 700 }} className="btn btn-primary btn-lg" to="/record">
										View Record
									</Link>
								</div>
							</div>
						</div>
						<div className="row no-gutters">
							<div className="col-lg-6 text-white showcase-img">
								<img style={{ height: '100%', width: '100%' }} src={notify} alt="" />
							</div>
							<div className="col-lg-6 my-auto showcase-text">
								<h2>Driver Score</h2>
								<p className="lead mb-0">
									Be aware of your current standing with the help of our Driver Score. You can now
									give insurance companies the confidence they need in your driving skills. Be careful
									though, don't let it get too low.
								</p>
								<div style={{ marginTop: 20 }}>
									<Link style={{ fontWeight: 700 }} className="btn btn-primary btn-lg" to="/payments">
										Go Now
									</Link>
								</div>
							</div>
						</div>
						<div className="row no-gutters">
							<div className="col-lg-6 order-lg-2 text-white showcase-img">
								<img style={{ height: '100%', width: '100%' }} src={pay} alt="" />
							</div>
							<div className="col-lg-6 order-lg-1 my-auto showcase-text">
								<h2>Online Payments</h2>
								<p className="lead mb-0">
									No longer will you line up for hours just to pay your bills now that MyDrive has the
									online payment process. Pay via PayPal, Visa, MasterCard, or any available online
									transaction system.
								</p>
								<div style={{ marginTop: 20 }}>
									<Link
										style={{ fontWeight: 700 }}
										className="btn btn-primary btn-lg"
										to="/notifications"
									>
										Payments
									</Link>
								</div>
							</div>
						</div>
					</div>
				</section>
				<section style={{ backgroundColor: 'rgb(248, 249, 250)' }} className="call-to-action  text-center">
					{/* <div className="overlay" /> */}
					<div className="container">
						<div className="row">
							<div style={{ marginTop: 110 }} className="col-xl-9 mx-auto">
								<h2 style={{ color: 'rgb(136, 136, 136)' }} className="mb-4">
									Want to talk? Let's get in touch!
								</h2>
							</div>
							<div className="col-md-10 col-lg-8 col-xl-7 mx-auto">
								<form>
									<div className="form-row">
										<div className="col-12 col-md-9 mb-2 mb-md-0">
											<input
												type="email"
												className="form-control form-control-lg"
												placeholder="Enter your email..."
											/>
										</div>
										<div style={{ marginBottom: 110 }} className="col-12 col-md-3">
											<button
												style={{ fontWeight: 500 }}
												type="submit"
												className="btn btn-lg btn-outline-primary"
											>
												Get in Touch!
											</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
				</section>
				<footer style={{ backgroundColor: '#007bff' }} class="page-footer font-small blue">
					<div style={{ color: 'white' }} class="footer-copyright text-center py-3">
						© 2019 Copyright
						<a style={{ color: 'white' }} href="#">
							{' '}
							MyDrive
						</a>
					</div>
				</footer>
				{/* </main> */}
			</React.Fragment>
		);
	}
}

export default Home;
