import React, { Component } from 'react';

import { connect } from "react-redux";
import VotesChart from '../VotesChart/VotesChart';


class AdminVotes extends Component {
    render() {
        return (
            <section class="admin-votes">
                <h2>Votes</h2>
                <div class="chart-wrapper">
                    <VotesChart />
                </div>
                <div>
                    <button class="ui button">Download CSV</button>
                </div>
            </section>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(AdminVotes);