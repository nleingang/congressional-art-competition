import React, { Component } from "react";

import { connect } from "react-redux";
import { Button } from "semantic-ui-react";
import './AdminPortal.css';

// components
import AdminHeader from '../AdminHeader/AdminHeader';
import AdminUpload from '../AdminUpload/AdminUpload';
import AdminVotes from '../AdminVotes/AdminVotes';


class LandingPage extends Component {

    handleEdit = () => {
        this.props.history.push("/admin/edit")
    }
    render() {

        return (
            <div class="admin-portal-wrapper">

                <AdminHeader />

                <AdminUpload />

                <AdminVotes />
                
                <section class="admin-edit">
                    <div>
                        <button class="ui button" onClick={this.handleEdit}>Edit Images</button>
                    </div>
                    <Button onClick={() => this.props.dispatch({ type: 'LOGOUT' })}>Logout</Button>
                </section>
                
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(LandingPage);