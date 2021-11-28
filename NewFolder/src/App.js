import React, { Component } from 'react';

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Layout } from './components/Layout';
import { Contact } from './components/Contact';
import { Passwordmaker } from './components/Passwordmaker';
import { Home } from './components/Home';
import Navbar from "./components/Navbar";
import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
        <Router>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
               
                <Route path="/Contact" component={Contact} />

                <Route path="/Passwordmaker" component={Passwordmaker} />
            </Switch>
        </Router>
    );
  }
}
