import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal } from "semantic-ui-react";

class VoteSuccessModal extends Component {
  
  state = {
    modalOpen: true,
  };

  render() {

    return (
      <div>
        <Modal size="mini" open={this.state.modalOpen}>
          <Modal.Content>
            <h4>
              Thank you for voting!
            </h4>
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(VoteSuccessModal);
