import React, { Component } from "react";
import { Header, Card, Image, Button } from "semantic-ui-react";

import { connect } from "react-redux";

// import './ModalCard.css';

class ArtCard extends Component {
  handleVoteClick = (event) => {
    console.log(event.target.value);
  };

  render() {
    return (
      <Card>
        <Image src={this.props.item.image_url} />
        <Card.Content textAlign="right">
          <Card.Header>{this.props.item.title}</Card.Header>
          <Card.Description>{this.props.item.artist}</Card.Description>
        </Card.Content>
        <Button onClick={this.handleVoteClick} value={this.props.item.id}>
          Vote
        </Button>
      </Card>
    );
  }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(ArtCard);
