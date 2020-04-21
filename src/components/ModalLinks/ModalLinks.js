import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Modal } from 'semantic-ui-react';
import NavLinks from '../NavLinks/NavLinks';


class ModalLinks extends Component {
  
  state = { modalOpen: false }

  handleOpen = () => this.setState({ modalOpen: true })

  handleClose = () => this.setState({ modalOpen: false })

  render() {
    return (
      <Modal
        trigger={
          <button class="ui button mobile-menu" onClick={this.handleOpen}>
            <i class="bars icon" />
          </button>
        }
        open={this.state.modalOpen}
        onClose={this.handleClose}
        basic
        size='fullscreen'
      >
        <Modal.Content>
          <ul className="mobile-nav-links-ul">
            <NavLinks responsive="mobile-nav-link"/>
          </ul>
        </Modal.Content>
      </Modal>
    )
  }
}

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(ModalLinks);
