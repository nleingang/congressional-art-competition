import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal } from "semantic-ui-react";

class VoteSubmissionModal extends Component {
  
  state = {
    modalOpen: true,
  };

  render() {

    return (
      <div>
        <Modal open={this.state.modalOpen}>
          <Modal.Header>Thank you for voting!</Modal.Header>
        </Modal>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(VoteSubmissionModal);
