import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Header,
  Modal,
  Button,
  Icon,
  Input,
  Image,
  Label,
  Item, 
  Segment, 
  Grid
} from "semantic-ui-react";

class VoteSubmissionModal extends Component {
  state = {
    modalOpen: true,
    zip: '',
    email: ''
  };

  getImageUrl = (id) => {
    // console.log(id);
    let sortArray = (e) => {
      return e.id == id;
    };
    let index = this.props.reduxState.setArt.find(sortArray);
    return index.image_url;
  };

  handleChange = (prop) => (event) => {
    this.setState({
      ...this.state,
      [prop]: event.target.value
    });
  }

  handleCancel = () => {
    this.props.dispatch({ type: "TRIGGER_RESET", payload: "CANCEL" });
  }

  handleSubmit = () => {
    this.props.dispatch({
      type: "EMAIL_SECURITY_CHECK",
      payload: this.state
    });
    
    this.props.dispatch({
      type: "ZIP_SECURITY_CHECK",
      payload: this.state
    });

    setTimeout(() => {
      console.log('in timeout:')
      console.log('this is voteSuccess:', this.props.reduxState.voteSuccess);
      if (this.props.reduxState.voteSuccess) {
        this.props.dispatch({ type: "TRIGGER_RESET" });
      }
    }, 4000);
  }

  render() {

    let errors = this.props.reduxState.errors;

    return (
      <div>
        <Modal
          dimmer={'blurring'}
          className="submit-modal centered-modal"
          open={this.state.modalOpen}>
          <Modal.Header>Your choices!</Modal.Header>
          <Modal.Content>
            <Segment basic>
              <Grid columns={3} stackable divided textAlign="center">
                <Grid.Row>
                  <Grid.Column>
                    <Header>First Place</Header>
                    <div class="img-wrapper">
                      <Image
                        src={this.getImageUrl(
                          this.props.reduxState.voteChoicesReducer[0]
                        )}
                      />
                    </div>
                  </Grid.Column>
                  <Grid.Column>
                    <Header>Second Place</Header>
                    <div class="img-wrapper">
                      <Image
                        src={this.getImageUrl(
                          this.props.reduxState.voteChoicesReducer[1]
                        )}
                      />
                    </div>
                  </Grid.Column>
                  <Grid.Column>
                    <Header>Third Place</Header>
                    <div class="img-wrapper">
                      <Image
                        src={this.getImageUrl(
                          this.props.reduxState.voteChoicesReducer[2]
                        )}
                      />
                    </div>
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
            <Grid columns={2} textAlign="center" stackable>
              <Grid.Row>
                <Grid.Column>
                  { errors.invalidZip !== '' ? 
                    <>
                      <Input
                        error
                        placeholder="Zip Code" 
                        value={this.state.zip} 
                        onChange={this.handleChange('zip')}
                      />
                      <Label>
                        {errors.invalidZip}
                      </Label>
                    </>
                      :
                    <Input 
                      placeholder="Zip Code" 
                      value={this.state.zip} 
                      onChange={this.handleChange('zip')}
                    />
                  }
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  { errors.invalidEmail !== '' ? 
                    <>
                      <Input
                        error
                        type="email"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChange('email')}
                        />
                      <Label>
                        {errors.invalidEmail}
                      </Label>
                    </>
                        :
                    <Input
                      type="email"
                      placeholder="Email"
                      value={this.state.email}
                      onChange={this.handleChange('email')}
                    />
                  }
                </Grid.Column>
              </Grid.Row>
              </Grid>
              <Grid columns={2} textAlign="center">
              <Grid.Row>
                <Grid.Column>
                  <Button inverted color={'red'} onClick={this.handleCancel}>Cancel</Button>
                </Grid.Column>
                <Grid.Column>
                  <Button positive onClick={this.handleSubmit}>Submit</Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
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
