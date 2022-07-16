import logo from './logo.svg';
import './App.css';
import {Route,Switch,Redirect} from 'react-router-dom';
import Home from './Components/Home.jsx';
import Login from './Components/Login/Login.jsx';
import Register from './Components/Login/Register.jsx';


function App() {
	return (
		<>
		  	<Switch>
		    	<Route exact path="/" component={() => (<Home which="Allblood" />)} />
				<Route exact path="/orderandrequest" component={() => (<Home which="Request" />)} />

				<Route exact path="/login" component={Login} />
				<Route exact path="/register" component={Register} />
		  	</Switch>
		</>
	    );
}

export default App;
