import React, { Component } from "react";
import { Card, Image, Button, Dimmer } from "semantic-ui-react";
import { connect } from "react-redux";

import './ArtCard.css';

class ArtCard extends Component {

  state = { 
    overlay: "",
    voteRank: ""
  }

  // this will activate the dimmer but setting state.overlay to active and updating the voteRank for this card
  activateOverlay = () => {
      this.setState({
        overlay: "ui active dimmer",
        voteRank: this.props.reduxState.voteChoicesReducer.findIndex(this.findArrayPosition) + 1
      });
  }

  // this will disable the dimmer by setting state.overlay to disabled and updating the voteRank for this card
  disableOverlay = () => {
    this.setState({
      overlay: "ui disabled dimmer",
      voteRank: this.props.reduxState.voteChoicesReducer.findIndex(this.findArrayPosition) + 1
    });
  }

  // function that will take in an id (string) and check if it matches the id (integer) of this card
  findArrayPosition = (id) => {
    if(id == this.props.item.id){
      return true;
    } else {
      return false;
    }
  }

  handleVoteClick = (event) => {
    if (this.checkIfClicked(event.target.value)) {
      return this.removeChoice(event.target.value);
    } else {
      return this.addChoice(event.target.value);
    }
  };

  

  checkIfClicked = (id) => {
    this.props.dispatch({
      type: "CHECK_VOTE_CHOICES",
    });
    let choices = this.props.reduxState.voteChoicesReducer;
    if (choices.includes(id)) {
        return true;
    } else {
        return false;
    }
  };

  // store array in local variable to avoid altering state
  // this doesn't seem to be creating the updating problem
  removeChoice = (id) => {
    let newState = this.props.reduxState.voteChoicesReducer;
    if (newState[0] == id) {
        newState.shift();
    } else if (newState[1] == id) {
        newState.splice(1,1);
    } else {
        newState.pop();
    }
    this.calculateVoteRanks(newState);
    this.props.dispatch({ type: "SET_VOTE_CHOICES", payload: newState });
    this.disableOverlay();
  };

  // store array in local variable to avoid alter state
  addChoice = (id) => {
    let newState = this.props.reduxState.voteChoicesReducer;
    newState.push(id);
    this.calculateVoteRanks(newState);
    this.props.dispatch({ type: "SET_VOTE_CHOICES", payload: newState });
    this.activateOverlay();
      if (this.props.reduxState.voteChoicesReducer.length === 3) {
        this.props.dispatch({
          type: "VOTE_SUBMISSION_MODAL_OPEN"
        })
      }
  };

  calculateVoteRanks = (newState) => {
    console.log("calculate vote ranks new state is:", newState);
    let first = newState[0];
    let second = newState[1];
    let third = newState[3];
    let voteRankState = {
      [first]: 1,
      [second]: 2,
      [third]: 3
    }
    this.props.dispatch({
      type: "SET_VOTE_RANKS",
      payload: voteRankState
    });
  };

  render() {
    return (
      <>
        <Dimmer.Dimmable as={Card} dimmed={this.state.overlay}>
          <Dimmer class={this.state.overlay}>
            <div class="content">
              <h2>{this.props.reduxState.voteRankDisplayReducer[this.props.item.id]}</h2>
              <Button inverted onClick={this.handleVoteClick} value={this.props.item.id}>Remove Vote</Button>
            </div>
          </Dimmer>
          <img src={this.props.item.image_url} height={400} width={290}/>
          <Card.Content textAlign="right">
            <Card.Header>{this.props.item.title}</Card.Header>
            <Card.Description>{this.props.item.artist}</Card.Description>
          </Card.Content>
          <Button basic className="vote-btn" onClick={this.handleVoteClick} value={this.props.item.id}>
            Vote
          </Button>
        </Dimmer.Dimmable>
      </>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(ArtCard);


  /* { this.state.isClicked ?}
          <div class="ui active dimmer">
            <div class="content">
              <h2>{this.props.item.id}</h2>
            </div>
          </div> */
