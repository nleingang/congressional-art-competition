import React, { Component } from "react";
import { connect } from "react-redux";
import { Header, Modal, Button, Icon, Input, Image} from "semantic-ui-react";

class VoteSubmissionModal extends Component {
    state = {
        modalOpen: true
    }

    render() {
        return (
          <div>
            <Modal open={this.state.modalOpen}>
              <Modal.Header>Review And Submit</Modal.Header>
              <Modal.Content>
                <div>
                  First Place: <Image />
                  Second Place: <Image />
                  Third Place: <Image />
                </div>
              </Modal.Content>
            </Modal>
          </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(VoteSubmissionModal);