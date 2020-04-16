import React, { Component } from "react";
// import {
//   HashRouter as Router,
//   Route,
//   Redirect,
//   Switch,
// } from "react-router-dom";
import { Button } from "semantic-ui-react";

import { connect } from "react-redux";

import './AdminPortal.css';


class LandingPage extends Component {
    componentDidMount() {
      this.props.dispatch({
          type: "GET_ALL_ART"
      });
    }

    render() {

        return (
          <div className="admin-portal-wrapper">
            
          </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(LandingPage);