import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login_Container from './container/Login_Container';
import Hr_Container from './container/Hr_Container';
import Employee_Container from "./container/Employee_Container";

class App extends Component {
  render() {
    return (
        <div>
            <Router>
                <div>
                    <Route exact path = "/" component={Login_Container}/>
                    <Route path = "/hr" component={Hr_Container}/>
                    <Route path = "/employee" component={Employee_Container}/>
                </div>
            </Router>
        </div>
    );
  }
}

export default App;
