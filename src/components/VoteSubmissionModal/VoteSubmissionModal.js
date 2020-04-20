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

  checkEmail = (email) => {
    // use to check if input email is a valid email format
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(this.state.email)) {
      // email is valid
      // send to server to check if email already exists in the database
      console.log(this.state.email, 'is valid')
    } else {
      // email is invalid, send an error
      console.log(this.state.email, 'is not valid')
    }
  }

  handleSubmit = () => {

  }

  render() {
    return (
      <div>
        <Modal open={this.state.modalOpen}>
          <Modal.Header>Review And Submit</Modal.Header>
          <Modal.Content>
            <Segment>
              <Grid columns={3} stackable divided textAlign="center">
                <Grid.Row>
                  <Grid.Column>
                    <Header>First Place</Header>
                    <Image
                      src={this.getImageUrl(
                        this.props.reduxState.voteChoicesReducer[0]
                      )}
                      size="small"
                      centered
                    />
                  </Grid.Column>
                  <Grid.Column>
                    <Header>Second Place</Header>
                    <Image
                      src={this.getImageUrl(
                        this.props.reduxState.voteChoicesReducer[1]
                      )}
                      size="small"
                      centered
                    />
                  </Grid.Column>
                  <Grid.Column>
                    <Header>Third Place</Header>
                    <Image
                      src={this.getImageUrl(
                        this.props.reduxState.voteChoicesReducer[2]
                      )}
                      size="small"
                      centered
                    />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Segment>
            <Grid columns={2} textAlign="center" stackable>
              <Grid.Row>
                <Grid.Column>
                  <Input 
                    placeholder="Zip Code" 
                    value={this.state.zip} 
                    onChange={this.handleChange('zip')}
                  />
                </Grid.Column>
                <Grid.Column>
                  <Input 
                    type="email"
                    placeholder="Email"
                    value={this.state.email}
                    onChange={this.handleChange('email')}
                  />
                </Grid.Column>
              </Grid.Row>
              </Grid>
              <Grid columns={2} textAlign="center">
              <Grid.Row>
                <Grid.Column>
                  <Button>Cancel</Button>
                </Grid.Column>
                <Grid.Column>
                  <Button onClick={this.handleSubmit}>Submit</Button>
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
