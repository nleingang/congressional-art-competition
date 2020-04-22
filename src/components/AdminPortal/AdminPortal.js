import React, { Component } from "react";

import { connect } from "react-redux";

import './AdminPortal.css';

// components
import AdminHeader from '../AdminHeader/AdminHeader';
import AdminUpload from '../AdminUpload/AdminUpload';
import AdminVotes from '../AdminVotes/AdminVotes';


class LandingPage extends Component {
    // Is this necessary here? 
    // componentDidMount() {
    //   this.props.dispatch({
    //       type: "GET_ALL_ART"
    //   });
    // }

    render() {

        return (
            <div class="admin-portal-wrapper">

                <AdminHeader />

                <AdminUpload />

                <AdminVotes />
                
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