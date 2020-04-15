import React, { Component } from "react";
import { Header, Modal, Button, Icon } from "semantic-ui-react";

import { connect } from 'react-redux';

import './VoteButtonModal.css';

class VoteButtonModal extends Component {
  state = {
    modalOpen: false,
  };

  handleOpen = () => this.setState({ modalOpen: true });

  handleClose = () => this.setState({ modalOpen: false });

  triggerVoteMode = () => {
    this.props.dispatch({
      type: "SET_VOTE_MODE"
    });
    console.log('function working')
    this.handleClose(); 
    // THIS MIGHT NOT BE NECESSARY IF CHANGING STATE CAUSES A RE-RENDER
  }

  render() {
    return (
      <Modal
        trigger={
          <Button size="large" onClick={this.handleOpen}>
            Cast Your Vote!
          </Button>
        }
        open={this.state.modalOpen}
        onClose={this.handleClose}
      >
        <Modal.Header>Get ready to vote!</Modal.Header>
        <Modal.Content>
          <Modal.Description>
            <Header>Voting Instructions</Header>
            <p>
              Cast your vote for 1st, 2nd, and 3rd place prizes! You must cast
              your votes in order.
            </p>
            <p>
              Click on an image to choose that piece. The first image you click
              will be your 1st place choice, the second image you click will be
              your 2nd place choice, and the third image you click will be your
              3rd place choice.
            </p>
            <p>
              If you change your mind, just click the image again to deselect
              it. The votes must be cast in order, so if you change your mind,
              make sure the pieces you've chosen are in the order you want!
            </p>
            <p>
              After you've chosen your top 3, a popup will appear asking you to
              confirm your votes. You will be asked to provide your zip code and
              email to ensure that you are eligible to vote and haven't voted
              more than once.
            </p>
            <p>Thanks for participating!</p>
          </Modal.Description>
          <Modal.Actions>
            <div className="got-it">
              <Button onClick={this.triggerVoteMode} positive>
                <Icon name="checkmark" /> Got it!
              </Button>
            </div>
          </Modal.Actions>
        </Modal.Content>
      </Modal>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(VoteButtonModal);
