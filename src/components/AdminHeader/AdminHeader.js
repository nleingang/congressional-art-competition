import React, { Component } from "react";

import { connect } from "react-redux";

class LandingPage extends Component {

    render() {

        return (
            <section class="admin-header">
                <h1>Admin Portal</h1>
                <h4 class="user-greeting">Welcome, { this.props.reduxState.user.username }!</h4>
            </section>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(LandingPage);