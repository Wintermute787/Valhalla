import React, {Component} from 'react';
import Navbar from '../components/layout/Navbar';
import Landing from '../components/layout/Landing';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import Register from '../components/auth/Register';
import Login from '../components/auth/Login';
import {Provider} from "react-redux";
import store from './store';


class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <Router>
      <div className="App">
        <Navbar />
        <Route exact path="/" Component={Landing}/>
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Landing />
      </div>
      </Router>
      </Provider>
    );
  }
}
export default App;
