import React, { Component } from "react";

import { connect } from "react-redux";

import './AdminPortal.css';

// components
import AdminHeader from '../AdminHeader/AdminHeader';
import AdminUpload from '../AdminUpload/AdminUpload';


class LandingPage extends Component {
    componentDidMount() {
      this.props.dispatch({
          type: "GET_ALL_ART"
      });
    }

    render() {

        return (
            <div class="admin-portal-wrapper">

                <AdminHeader/>

                <AdminUpload/>
            
                <section class="admin-votes">
                    <h2>Votes</h2>
                    <div class="chart-wrapper">
                        {/* jsChart goes here */}
                    </div>
                    <div>
                        <button class="ui button">Download CSV</button>
                    </div>
                </section>

                <section class="admin-edit">
                    <div>
                        <button class="ui button">Edit Images</button>
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