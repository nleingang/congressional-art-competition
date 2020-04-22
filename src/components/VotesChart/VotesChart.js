import React, { Component } from 'react';
import { connect } from "react-redux";

import { Bar } from "react-chartjs-2";


class AdminVotes extends Component {

    componentDidMount() {
        this.props.dispatch({ type: "GET_ALL_ART" });
        this.props.dispatch({ type: "GET_VOTES" });
    }

    calculateVoteTotals = ( artistArray, votesArray ) => {

        let voteTotals = [];

        artistArray.forEach( artist => {
            voteTotals.push(0);
        }); // creates 0 totals for each artist

        votesArray.forEach( vote => {
            voteTotals[ vote.first_place - 1 ] += 3;
            voteTotals[ vote.second_place - 1 ] += 2;
            voteTotals[ vote.third_place - 1 ] += 1;
        }); // tallies points for each vote's first, second, and third choices

        return voteTotals;
    }

    voteChartData = () => {

        const artReducer = this.props.reduxState.setArt;
        const votes = this.props.reduxState.setVotes;

        let artists = [];
        artReducer.forEach( item => {
            artists.push( item.artist );
        });

        let voteArray = this.calculateVoteTotals( artists, votes );


        const voteData = {
            labels: artists,
            legend: {
                display: false
            },
            datasets: [{
                label: "Vote Results",
                borderWidth: 1,
                data: voteArray
            }]
        }

        return voteData;
    }

    render() {
        return (
            <Bar 
                data={this.voteChartData}/>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(AdminVotes);