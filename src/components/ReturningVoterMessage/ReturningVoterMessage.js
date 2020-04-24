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
        <Modal basic
          dimmer={'blurring'}
          onClose={() => {this.props.dispatch({ type: "TRIGGER_RESET" });}}
          size="mini"
          open={this.state.modalOpen}
        >
          <Modal.Content>
            <h4>
              Our records indicate that you have already voted.
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
