import React, { Component } from "react";
import { connect } from "react-redux";
import { CSVLink, CSVDownload } from "react-csv";
import VotesChart from "../VotesChart/VotesChart";

class AdminVotes extends Component {
  fakeData = [
    ["firstname", "lastname", "email"],
    ["Ahmed", "Tomi", "ah@smthing.co.com"],
    ["Raed", "Labes", "rl@smthing.co.com"],
    ["Yezzi", "Min l3b", "ymin@cocococo.com"],
  ];

  sortCSVData = (artReducer, votesReducer) => {
    let sortedData = [];
    let columnHeaders = [
      "Artist ID Number",
      "Artist",
      "First Place Votes",
      "Second Place Votes",
      "Third Place Votes",
    ];
    sortedData.push(columnHeaders);
     let firstPlaceVotes = [];
     let secondPlaceVotes = [];
     let thirdPlaceVotes = [];
     votesReducer.map((votes) => {
       firstPlaceVotes.push(votes.first_place);
       secondPlaceVotes.push(votes.second_place);
       thirdPlaceVotes.push(votes.third_place);
     });
    artReducer.map(object => {
        let row = [];
        row.push(object.id);
        row.push(object.artist);
        row.push(0);
        row.push(0);
        row.push(0);
        firstPlaceVotes.forEach(vote => {
            if (vote == row[0]) {
                row[2]++;
            }
        });
        secondPlaceVotes.forEach(vote => {
            if(vote == row[0]) {
                row[3]++;
            }
        })
        thirdPlaceVotes.forEach(vote => {
            if(vote == row[0]) {
                row[4]++;
            }
        })
        sortedData.push(row);
    });
    return sortedData;
  };

  render() {
    return (
      <section class="admin-votes">
        <h2>Votes</h2>
        <div class="chart-wrapper">
          <VotesChart />
        </div>
        <div>
          <CSVLink
            data={this.sortCSVData(
              this.props.reduxState.setArt,
              this.props.reduxState.setVotes
            )}
            class="ui button"
          >
            Download CSV
          </CSVLink>
        </div>
      </section>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(AdminVotes);
