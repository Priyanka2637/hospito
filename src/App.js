import React, { Component } from 'react';
import './App.css';
import NavigationMenu from './NavigationMenu.js'
import FooterComponent from './FooterComponent.js'
import About from './components/About';
import Service from './components/Service';
import Contact from './components/Contact';
import Home from './Home';
import Login from './components/Login';
import Registration from './components/Registration';
import ForgotPassword from './components/ForgotPassword';
import Medicine from './components/Medicine';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Footer } from 'react-bootstrap/lib/Modal';


class App extends Component {

  constructor(props) {
    super(props);
  }
  
  render() {


    return (
      <Router>
      <div>
        <NavigationMenu onChange={this.handleSectionChange}/>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>       
          <Route path="/service">
          <Service />
          </Route>
          <Route path="/contact">
          <Contact />
          </Route>
          <Route path="/login">
          <Login />
          </Route>
          <Route path="/registration">
          <Registration/>
          </Route>
          <Route path="/forgotPassword">
          <ForgotPassword/>
          </Route>
          <Route path="/medicine">
          <Medicine/>
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <FooterComponent />
      </div>
    </Router>
    );
  }
}

export default App;

// const Homes = () =>{
// return (<div> HI </div>)
// }

