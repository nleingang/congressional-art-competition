import React, { Component } from "react";
// import {
//   HashRouter as Router,
//   Route,
//   Redirect,
//   Switch,
// } from "react-router-dom";
import { Card, Button } from "semantic-ui-react";
import ModalCard from "../ModalCard/ModalCard";

import { connect } from "react-redux";

import './LandingPage.css';

//components
import VoteButtonModal from '../VoteButtonModal/VoteButtonModal';
import ArtCard from '../ArtCard/ArtCard';

class LandingPage extends Component {
    componentDidMount() {
      this.props.dispatch({
          type: "GET_ALL_ART"
      });
      this.props.dispatch({
        type: "CHECK_VOTE_CHOICES"
      })
    }

    handleVoteSubmission = () => {
      this.props.dispatch({
        type: "SUBMIT_VOTE",
        payload: this.props.reduxState.voteChoicesReducer
      })
    }
    render() {

        return (
          <div className="landing-page-wrapper">
            <div className="vote-button">
              <VoteButtonModal />
            </div>
            <div className="art-grid-wrapper">
              <Card.Group stackable={true} centered={true}>
                {this.props.reduxState.setArt.map((item) => {
                  if(this.props.reduxState.voteMode){
                    if(this.props.reduxState.voteChoicesReducer.includes(item.id)){
                      return (
                        <ArtCard key={item.id} item={item} overlay="ui active dimmer"/>
                      );
                    } else {
                      return (
                        <ArtCard key={item.id} item={item} overlay="ui disabled dimmer"/>
                      );
                    }
                  } else {
                    return (
                      <ModalCard key={item.id} item={item}/>
                    );
                  }
                })}
              </Card.Group>
              
            </div>
            <div className="vote-button">
              <VoteButtonModal />
            </div>
            {/* temporary vote submission button; delete when triggering modal for real */}
            {this.props.reduxState.voteSubmissionModalReducer ? <Button onClick={this.handleVoteSubmission}>Submit</Button> : <></>}
          </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(LandingPage);