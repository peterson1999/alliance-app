import React, { Component } from 'react';
import Index from "./Pages/index";
import Payments from "./Pages/payments";
import Notifications from "./Pages/notifications";
import Home from "./Pages/landing";
// import Navbar from './components/Navbar';
// import First from './components/First';
// import Second from './components/Second';
import {BrowserRouter as Router,Route} from "react-router-dom";
class App extends Component {
	state = {};
	render() {
		return (
			<Router>
				<Route exact path ="/record" component={Index}></Route>
				<Route exact path ="/payments" component={Payments}></Route>
				<Route exact path ="/notifications" component={Notifications}></Route>
				<Route exact path ="/" component={Home}></Route>
			</Router>
		);
	}
}

export default App;
