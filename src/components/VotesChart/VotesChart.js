import React, { Component } from 'react';
import { connect } from "react-redux";
import { Bar } from "react-chartjs-2";


class VotesChart extends Component {

    componentDidMount() {
        this.props.dispatch({ type: "GET_ALL_ART" });
        this.props.dispatch({ type: "GET_VOTES" });
    }

    calculateVoteTotals = ( artReducer, votesReducer ) => {
        let voteTotals = {};

        artReducer.forEach( artist => {
            voteTotals[artist.id] = 0;
        }); // creates 0 totals for each artist
        votesReducer.forEach( vote => {
            voteTotals[ vote.first_place ] += 3;
            voteTotals[ vote.second_place ] += 2;
            voteTotals[ vote.third_place ] += 1;
        }); // tallies points for each vote's first, second, and third choices


        return voteTotals;
    }

    sortDesc = ( artReducer, voteTotals ) => {
        let dataToSort = [];

        artReducer.map(item => {
            dataToSort.push({
                artist: item.artist,
                votes: voteTotals[item.id]
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
            <Bar data={this.voteChartData}
                options = {{ scales: { yAxes: [{ ticks: { beginAtZero: true } }] } }}
            />
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(VotesChart);