import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal } from "semantic-ui-react";

import './VoteSuccessModal.css';

class VoteSuccessModal extends Component {
  
  state = {
    modalOpen: true,
  };

  close = () => this.setState({ modalOpen: false });

  render() {

    const { modalOpen } = this.state;

    return (
      <>
        <Modal basic dimmer={'blurring'}
          size="fullscreen"
          open={modalOpen}
          onClose={this.close}>
          <Modal.Content>
            <i class="check circle massive icon"/>
            <h2>
              Thank you for voting!
            </h2>
          </Modal.Content>
        </Modal>
      </>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(VoteSuccessModal);
