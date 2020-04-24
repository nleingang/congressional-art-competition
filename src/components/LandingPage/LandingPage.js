import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Card, Button, Header, Segment } from "semantic-ui-react";
import ModalCard from "../ModalCard/ModalCard";
import VoteSubmissionModal from "../VoteSubmissionModal/VoteSubmissionModal";

import { connect } from "react-redux";

import "./LandingPage.css";

//components
import VoteButtonModal from "../VoteButtonModal/VoteButtonModal";
import ArtCard from "../ArtCard/ArtCard";
import VoteSuccessModal from "../VoteSuccessModal/VoteSuccessModal";
import ReturningVoterMessage from "../ReturningVoterMessage/ReturningVoterMessage";

class LandingPage extends Component {
  componentDidMount() {
    this.props.dispatch({
      type: "GET_ALL_ART",
    });
    this.props.dispatch({
      type: "CHECK_VOTE_CHOICES",
    });
  }

  handleVoteSubmission = () => {
    this.props.dispatch({
      type: "SUBMIT_VOTE",
      payload: this.props.reduxState.voteChoicesReducer,
    });
  };

  render() {
    return (
      <div className="landing-page-wrapper">
        <Header size="huge" textAlign="center" dividing>
          2020 Congressional Art Competition
        </Header>
        <Segment raised>
          Art is often the context that helps us understand who we are and where
          our common ground is. This year, I encourage students to think about
          our shared country when making their piece. What is America to you?
          <ul>
            <li>
              Visual art competition open to all high schoolers in Minnesota’s
              Fifth District
            </li>
            <li>Voting is open to MN05 residents May 27 through June 2 </li>
            <li>
              Winning submission will get two plane tickets to Washington, DC
              and have their work displayed in the US Capitol for one year
            </li>
            <li>
              On May 5, 2020, we will gather for a reception in honor of these
              brilliant young artists and announce the winners.
            </li>
          </ul>
          Click on the "Cast Your Vote" button below to choose your favorite pieces!
        </Segment>
        <div className="vote-button">
          {!this.props.reduxState.user.id ? (
            <VoteButtonModal />
          ) : (
            <Link to="/admin">
              <Button content="Back to Admin Portal" />
            </Link>
          )}
        </div>
        <div className="art-grid-wrapper">
          <Card.Group stackable={true} centered={true}>
            {this.props.reduxState.setArt.map((item) => {
              if (this.props.reduxState.voteMode) {
                return <ArtCard key={item.id} item={item} />;
              } else if (this.props.reduxState.user.id) {
                return <ArtCard key={item.id} item={item} />;
              } else {
                return <ModalCard key={item.id} item={item} />;
              }
            })}
          </Card.Group>
        </div>
        <div className="vote-button">
          {!this.props.reduxState.user.id ? (
            <VoteButtonModal />
          ) : (
            <Link to="/admin">
              <Button content="Back to Admin Portal" />
            </Link>
          )}
        </div>
        {/* 
              each of these modals display messages to the 
              user based on the state of various reducers

              the VoteSubmissionModal is opened when the user has selected three votes
              the VoteSuccessModal is opened when email/zip are validated and the votes are submitted
              the ReturningVoterMessage is displayed when the entered email has already been used
            */}
        {this.props.reduxState.voteSubmissionModalReducer ? (
          <VoteSubmissionModal></VoteSubmissionModal>
        ) : (
          <></>
        )}
        {this.props.reduxState.voteSuccess ? <VoteSuccessModal /> : <></>}
        {/* <VoteSuccessModal></VoteSuccessModal> */}
        {this.props.reduxState.errors.invalidEmail === "email in use" ? (
          <ReturningVoterMessage />
        ) : (
          <></>
        )}
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(LandingPage);
