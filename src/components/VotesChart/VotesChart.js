import React, { Component } from 'react';
import { connect } from "react-redux";

import { Bar } from "react-chartjs-2";


class AdminVotes extends Component {

    componentDidMount() {
        this.props.dispatch({ type: "GET_ALL_ART" });
    }

    calculateVoteTotals = ( artistArray,  ) => {

        voteTotals = [];

        artistArray.forEach( artist => {
            voteTotals.push(0);
        }); // creates 0 totals for each artist



    }

    voteChartData = () => {

        const artReducer = this.props.reduxState.setArt;
        const voteReducer = this.props.reduxState.setVote;

        let artists = [];
        artData.forEach( item => {
            artists.push( item.artist );
        });

        let voteData = calculateVoteTotals( artists );


        const voteData = {
            labels: artTitlesArray,
            legend: {
                display: false
            },
            datasets: [{
                label: "Vote Results",
                borderWidth: 1,
                data: voteData
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