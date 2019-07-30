import React, {Component} from 'react';
import Navbar from '../components/layout/Navbar';
import Landing from '../components/layout/Landing';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Register from '../components/auth/Register';
import Login from '../components/auth/Login';
import {Provider} from "react-redux";
import store from '../store'
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";
import {setCurrentUser, logoutUser} from './actions/authActions'
import PrivateRoute from './private-route/PrivateRoute'
import Dashboard from './dashboard/Dashboard';
import CharacterShow from './layout/CharacterShow'

//check for token to keep user logged in
if(localStorage.jwtToken) {
  //set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  //decode token and get user info and exp
  const decoded = jwt_decode(token);
  //set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

  //check for expired token
  const currentTime = Date.now()/ 1000; //to get in milliscends
  if(decoded.exp < currentTime) {
    //logout user
    store.dispatch(logoutUser());

    //redirect to login 
    window.location.href = '/login';
  }
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
      <div className="App">
        <Navbar />
        
        <Route exact path="/" component={Landing}/>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Switch>
          <PrivateRoute exact path='/dashboard' component={Dashboard}/>
          <PrivateRoute path='/character' component={CharacterShow}/>
        </Switch>
      </div>
      </Router>
      </Provider>
    );
  }
}
export default App;
