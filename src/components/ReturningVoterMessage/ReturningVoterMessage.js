import React, { Component } from "react";
import { connect } from "react-redux";
import { Modal } from "semantic-ui-react";

class ReturningVoterMessage extends Component {
  
  state = {
    modalOpen: true,
  };

  render() {

    return (
      <div>
        <Modal size="mini" open={this.state.modalOpen}>
          <Modal.Content>
            <h4>
              You have already voted and may not vote twice.
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

export default connect(mapReduxStateToProps)(ReturningVoterMessage);
