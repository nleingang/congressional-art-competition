import React, { Component } from "react";
import { Card, Image, Button } from "semantic-ui-react";

import { connect } from "react-redux";

// import './ModalCard.css';

class ArtCard extends Component {

  // when the ArtCard component mounts, it will check the contents of the voteChoicesReducer, []
  // it will also set state.overlay to props.overlay passed from the landing page
  // NOTE: there seems to be a race condition happening - 
  // componentDidMount() {
  //   this.props.dispatch({
  //     type: "CHECK_VOTE_CHOICES"
  //   })
  //   this.setState({
  //     overlay: this.props.overlay,
  //     voteRank: this.props.reduxState.voteChoicesReducer.findIndex(this.findArrayPosition) + 1
  //   })
  // }

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
      console.log(event.target.value)
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
    this.props.dispatch({ type: "SET_VOTE_CHOICES", payload: newState });
    this.disableOverlay();
  };

  // store array in local variable to avoid alter state
  addChoice = (id) => {
    let newState = this.props.reduxState.voteChoicesReducer;
    newState.push(id);
    this.props.dispatch({ type: "SET_VOTE_CHOICES", payload: newState });
    this.activateOverlay();
      if (this.props.reduxState.voteChoicesReducer.length === 3) {
        this.props.dispatch({
          type: "VOTE_SUBMISSION_MODAL_OPEN"
        })
      }
  };

  render() {
    return (
      <>
        <Card>
            <div class={this.state.overlay}>
              <div class="content">
                <h2>{this.state.voteRank}</h2>
              </div>
            </div>
            <Image src={this.props.item.image_url} />
            <Card.Content textAlign="right">
              <Card.Header>{this.props.item.title}</Card.Header>
              <Card.Description>{this.props.item.artist}</Card.Description>
            </Card.Content>
        </Card>
        <Button onClick={this.handleVoteClick} value={this.props.item.id}>
          Vote
        </Button>
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
