import React, { Component } from 'react';
import { connect } from "react-redux";
import { Bar } from "react-chartjs-2";


class VotesChart extends Component {

    componentDidMount() {
        this.props.dispatch({ type: "GET_ALL_ART" });
        this.props.dispatch({ type: "GET_VOTES" });
    }

    calculateVoteTotals = ( artArray, votesArray ) => {
        let voteTotals = [];

        artArray.forEach( artist => {
            voteTotals.push(0);
        }); // creates 0 totals for each artist

        votesArray.forEach( vote => {
            voteTotals[ vote.first_place - 1 ] += 3;
            voteTotals[ vote.second_place - 1 ] += 2;
            voteTotals[ vote.third_place - 1 ] += 1;
        }); // tallies points for each vote's first, second, and third choices

        return voteTotals;
    }

    sortDesc = ( artArray, votesArray ) => {
        let dataToSort = [];

        artArray.map(item => {
            dataToSort.push({
                artist: item.artist,
                votes: votesArray[item.id - 1]
            });
        });

        return dataToSort.sort((a, b) => b.votes - a.votes);
    }

    voteChartData = () => {

        const artReducer = this.props.reduxState.setArt;
        const votesReducer = this.props.reduxState.setVotes;

        const voteTotals = this.calculateVoteTotals( artReducer, votesReducer );
        const sortedData = this.sortDesc( artReducer, voteTotals );

        const artists = sortedData.map( item => item.artist );
        const votes = sortedData.map( item => item.votes );

        const voteData = {
            labels: artists,
            legend: {
                display: false
            },
            datasets: [{
                label: "Vote Results",
                borderWidth: 1,
                data: votes
            }]
        }

        return voteData;
    }

    render() {
        return (
            <Bar data={this.voteChartData}/>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(VotesChart);