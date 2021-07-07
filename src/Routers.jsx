import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Headers from './layouts/Header';
import Footer from './layouts/Footer';
import App from './App';
import About from './About';


function Routers() {
  return (
    <Router>
      <Headers />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/about" component={About} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default Routers;
