import React, { Component } from "react";
// import {
//   HashRouter as Router,
//   Route,
//   Redirect,
//   Switch,
// } from "react-router-dom";
import { Button, Icon } from "semantic-ui-react";

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
          <div class="admin-portal-wrapper">

              <section class="admin-header">
                <h1>Admin Portal</h1>
                <h4 class="user-greeting">Welcome, { this.props.reduxState.user.username }!</h4>
              </section>

              <section class="admin-upload">
                <h2>Image Upload</h2>
                <div class="new-image-wrapper">
                    <div class="all-inputs">
                        <div>
                            <button class="ui button">
                                <Icon name="arrow up" positive/>Upload
                            </button>
                        </div>
                        <div class="text-inputs">
                            <div>
                                <label for="title">Title:</label>
                                <div class="ui input">
                                    <input type="text" id="title" placeholder="Title..."/>
                                </div>
                            </div>

                            <div>
                                <label for="artist">Artist:</label>
                                <div class="ui input">
                                    <input type="text" id="artist" placeholder="Artist..."/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="submit-btn">
                        <button class="ui green button">
                            Submit
                        </button>
                    </div>
                </div>
              </section>
          </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(LandingPage);