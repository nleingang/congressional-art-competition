import React, { Component } from "react";
// import {
//   HashRouter as Router,
//   Route,
//   Redirect,
//   Switch,
// } from "react-router-dom";
import { Card, Button, Header } from "semantic-ui-react";
import ModalCard from "../ModalCard/ModalCard";
import VoteSubmissionModal from "../VoteSubmissionModal/VoteSubmissionModal";

import { connect } from "react-redux";

import "./LandingPage.css";

//components
import VoteButtonModal from '../VoteButtonModal/VoteButtonModal';
import ArtCard from '../ArtCard/ArtCard';
import VoteSuccessModal from '../VoteSuccessModal/VoteSuccessModal';
import ReturningVoterMessage from '../ReturningVoterMessage/ReturningVoterMessage';

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
            <Header size="huge" textAlign="center" dividing>2020 Congressional Art Competition</Header>
            <div className="vote-button">
              <VoteButtonModal />
            </div>
            <div className="art-grid-wrapper">
              <Card.Group stackable={true} centered={true}>
                {this.props.reduxState.setArt.map((item) => {
                  if(this.props.reduxState.voteMode){
                      return (
                        <ArtCard key={item.id} item={item} />
                      );
                  } else if(this.props.reduxState.user.id) {
                    return (
                      <ArtCard key={item.id} item={item}/>
                    )
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
            {/* 
              each of these modals display messages to the 
              user based on the state of various reducers

              the VoteSubmissionModal is opened when the user has selected three votes
              the VoteSuccessModal is opened when email/zip are validated and the votes are submitted
              the ReturningVoterMessage is displayed when the entered email has already been used
            */}
            {this.props.reduxState.voteSubmissionModalReducer ? <VoteSubmissionModal></VoteSubmissionModal> : <></>}
            {this.props.reduxState.voteSuccess ? <VoteSuccessModal/> : <></>}
            {/* <VoteSuccessModal></VoteSuccessModal> */}
            {this.props.reduxState.errors.invalidEmail === 'email in use' ? <ReturningVoterMessage/> : <></>}
          </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(LandingPage);
