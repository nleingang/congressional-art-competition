import React, {Component} from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import {connect} from 'react-redux';

import Nav from '../Nav/Nav';
import Footer from '../Footer/Footer';

import ProtectedRoute from '../ProtectedRoute/ProtectedRoute'

import AboutPage from '../AboutPage/AboutPage';
import UserPage from '../UserPage/UserPage';
import InfoPage from '../InfoPage/InfoPage';
import LandingPage from '../LandingPage/LandingPage';
import AdminPortal from '../AdminPortal/AdminPortal';
import MobileNav from '../MobileNav/MobileNav';

import './App.css';

class App extends Component {
  componentDidMount () {
    this.props.dispatch({type: 'FETCH_USER'})
  }

  render() {
    return (
      <Router>
        <Nav />
        <MobileNav />
        <div class="container-wrapper">
          <div class="container">
            <Switch>
              <Route exact path="/" component={LandingPage} />

              <ProtectedRoute exact path="/admin" component={AdminPortal} />
              <ProtectedRoute exact path="/admin/edit" component={LandingPage} />
              {/* If none of the other routes matched, we will show a 404. */}
              <Route render={() => <h1>404</h1>} />
            </Switch>
          </div>
        </div>
        <Footer />
      </Router>
    );}
}

export default connect()(App);
