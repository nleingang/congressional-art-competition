import React, { Component } from "react";
import { Header, Card, Image, Button } from "semantic-ui-react";

import { connect } from "react-redux";

// import './ModalCard.css';

class ArtCard extends Component {
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
    if (Object.values(choices).includes(id)) {
      return true;
    } else {
      return false;
    }
  };

  removeChoice = (id) => {
    console.log("this will remove " + id);
  };

  addChoice = (id) => {
    if (
      !this.props.reduxState.voteChoicesReducer.firstPlace &&
      !this.props.reduxState.voteChoicesReducer.secondPlace &&
      !this.props.reduxState.voteChoicesReducer.thirdPlace
    ) {
      this.props.dispatch({
        type: "ADD_FIRST_VOTE",
        payload: id,
      });
    }
    else if (
        this.props.reduxState.voteChoicesReducer.firstPlace &&
        !this.props.reduxState.voteChoicesReducer.secondPlace &&
        !this.props.reduxState.voteChoicesReducer.thirdPlace
    ) {
        this.props.dispatch({
            type: "ADD_SECOND_VOTE",
            payload: id
        })
    };
  };

  render() {
    return (
      <Card>
        <Image src={this.props.item.image_url} />
        <Card.Content textAlign="right">
          <Card.Header>{this.props.item.title}</Card.Header>
          <Card.Description>{this.props.item.artist}</Card.Description>
        </Card.Content>
        <Button onClick={this.handleVoteClick} value={this.props.item.id}>
          Vote
        </Button>
      </Card>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(ArtCard);
