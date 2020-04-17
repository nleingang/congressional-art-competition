import React, { Component } from "react";
import { Header, Card, Image, Button } from "semantic-ui-react";

import { connect } from "react-redux";

// import './ModalCard.css';

class ArtCard extends Component {

  state = { 
    overlay: "ui disabled dimmer",
    voteRank: "" 
  }

  activateOverlay = () => this.setState({
    overlay: "ui active dimmer"
  });

  disableOverlay = () => this.setState({
    overlay: "ui disabled dimmer"
  });

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

  removeChoice = (id) => {
    if (this.props.reduxState.voteChoicesReducer[0] == id) {
        this.props.reduxState.voteChoicesReducer.shift();
    } else if (this.props.reduxState.voteChoicesReducer[1] == id) {
        this.props.reduxState.voteChoicesReducer.splice(1,1);
    } else {
        this.props.reduxState.voteChoicesReducer.pop();
    }
    this.props.dispatch({
        type: "CHECK_VOTE_CHOICES"
    });
    this.disableOverlay();
    console.log(this.props.reduxState.voteChoicesReducer);
  };

  addChoice = (id) => {
      console.log('this will add', id);
      this.props.reduxState.voteChoicesReducer.push(id);
      this.props.dispatch({
            type: "CHECK_VOTE_CHOICES"
        });
      this.activateOverlay();
        console.log(this.props.reduxState.voteChoicesReducer);
        if  (this.props.reduxState.voteChoicesReducer.length === 3) {
            this.props.dispatch({
                type: "VOTE_SUBMISSION_MODAL_OPEN"
            })
        }
      };

  render() {
    return (
      <>
        <Card>
            <div class={this.state.overlay} onClickOutside={this.handleVoteClick}>
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
