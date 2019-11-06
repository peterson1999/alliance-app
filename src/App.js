import React, { Component } from 'react';
import Index from "./Pages/index";
import Payments from "./Pages/payments";
import Notifications from "./Pages/notifications";
// import Navbar from './components/Navbar';
// import First from './components/First';
// import Second from './components/Second';
import {BrowserRouter as Router,Route,Switch,Link,Redirect} from "react-router-dom";
class App extends Component {
	state = {};
	render() {
		return (
			<Router>
				<Route exact path ="/" component={Index}></Route>
				<Route exact path ="/payments" component={Payments}></Route>
				<Route exact path ="/notifications" component={Notifications}></Route>
			</Router>
		);
	}
}

export default App;
