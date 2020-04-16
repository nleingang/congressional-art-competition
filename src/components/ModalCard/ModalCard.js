import React, { Component } from "react";
import { Header, Card, Image, Modal } from "semantic-ui-react";

import { connect } from "react-redux";

// import './ModalCard.css';

class ModalCard extends Component {

    render() {
        return (
            <Modal closeIcon
                trigger={
                    <Card>
                        <Image src={this.props.item.image_url} />
                        <Card.Content textAlign="right">
                            <Card.Header>{this.props.item.title}</Card.Header>
                            <Card.Description>{this.props.item.artist}</Card.Description>
                        </Card.Content>
                    </Card>
            }>
                <Modal.Content image className="artwork-popup">
                    <Image wrapped-size="medium" src={this.props.item.image_url}/>
                    <Header>{this.props.item.title}</Header>
                    <p>by {this.props.item.artist}</p>
                </Modal.Content>
            </Modal>
                 
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(ModalCard);