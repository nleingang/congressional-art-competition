import React, { Component } from "react";
import { Card, Image, Button, Dimmer } from "semantic-ui-react";
import { connect } from "react-redux";

import './ArtCard.css';

class ArtCard extends Component {
  state = {
    overlay: "",
    voteRank: "",
  };

  // this will activate the dimmer but setting state.overlay to active and updating the voteRank for this card
  activateOverlay = () => {
    this.setState({
      overlay: "ui active dimmer",
      voteRank:
        this.props.reduxState.voteChoicesReducer.findIndex(
          this.findArrayPosition
        ) + 1,
    });
    setTimeout( ()=> {
      this.setState({
        overlay: "ui active dimmer fade-in"
      })
    }, 0)
  };

  // this will disable the dimmer by setting state.overlay to disabled and updating the voteRank for this card
  disableOverlay = () => {
    this.setState({
      overlay: "ui active dimmer",
      voteRank:
        this.props.reduxState.voteChoicesReducer.findIndex(
          this.findArrayPosition
        ) + 1,
    });
    setTimeout( () => {
      this.setState({
        overlay: "ui disabled dimmer"
      })
    }, 500)
  };

  // function that will take in an id (string) and check if it matches the id (integer) of this card
  findArrayPosition = (id) => {
    if (id == this.props.item.id) {
      return true;
    } else {
      return false;
    }
  };

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
      newState.splice(1, 1);
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
        type: "VOTE_SUBMISSION_MODAL_OPEN",
      });
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
      [third]: 3,
    };
    this.props.dispatch({
      type: "SET_VOTE_RANKS",
      payload: voteRankState,
    });
  };

  handleDelete = (event) => {
    this.props.dispatch({
      type: "DELETE_ARTWORK",
      payload: [event.target.value],
    });
    //get updated list
    this.props.dispatch({
      type: "GET_ALL_ART"
    });
  };

  render() {
    return (
      <>
        {this.props.reduxState.voteMode ? (
          //renders for voter
          <>
            <Dimmer.Dimmable as={Card} dimmed={this.state.overlay}>
                <Dimmer class={this.state.overlay}>
                  <div class="content">
                    <h2>
                      {
                        this.props.reduxState.voteRankDisplayReducer[
                          this.props.item.id
                        ]
                      }
                    </h2>
                    {/* this will hide the button on fade out */}
                    { this.state.overlay !== "ui active dimmer" ?
                      <Button
                        inverted
                        onClick={this.handleVoteClick}
                        value={this.props.item.id}
                        content="Remove Vote"
                      /> : <></> }
                  </div>
                </Dimmer>
              <div class="img-wrapper">
                <Image src={this.props.item.image_url} />
              </div>
              <Card.Content textAlign="right">
                <Card.Header>{this.props.item.title}</Card.Header>
                <Card.Description>{this.props.item.artist}</Card.Description>
              </Card.Content>
              {/* this will hide the button on fade in */}
              {this.state.overlay !== "ui active dimmer fade-in" ? (
                <Button
                  secondary
                  className="vote-btn"
                  onClick={this.handleVoteClick}
                  value={this.props.item.id}
                  content="Vote"
                />
              ) : (
                <></>
              )}
            </Dimmer.Dimmable>
          </>
        ) : (
          //renders for admin
          <>
            <Card>
              <div class="img-wrapper">
                <Image src={this.props.item.image_url} />
              </div>
              <Card.Content textAlign="right">
                <Card.Header>{this.props.item.title}</Card.Header>
                <Card.Description>{this.props.item.artist}</Card.Description>
              </Card.Content>
              <Card.Content extra>
                <div className="ui two buttons">
                  <Button basic color="green">
                    Edit
                  </Button>
                  <Button basic color="red" onClick={this.handleDelete} value={this.props.item.id}>
                    Delete
                  </Button>
                </div>
              </Card.Content>
            </Card>
          </>
        )}
      </>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(ArtCard);
