import React, { Component } from "react";
import { Header, Card, Image, Modal } from "semantic-ui-react";

import { connect } from "react-redux";

// import './ModalCard.css';

class ArtCard extends Component {
    componentDidMount() {
        this.props.dispatch({
            type: "GET_ALL_ART"
        });
    }

    render() {
        return (
            <Card>
                <Image src={this.props.item.image_url} />
                <Card.Content textAlign="right">
                    <Card.Header>{this.props.item.title}</Card.Header>
                    <Card.Description>{this.props.item.artist}</Card.Description>
                </Card.Content>
            </Card> 
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(ArtCard);