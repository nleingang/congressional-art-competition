import React, { Component } from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { Header, Card, Image, Button, Modal } from "semantic-ui-react";

import { connect } from "react-redux";

import './LandingPage.css';

class LandingPage extends Component {
    componentDidMount() {
        this.props.dispatch({
            type: "GET_ALL_ART"
        });
    }

    render() {
        return (
          <div className="landing-page-wrapper">
            <div className="vote-button">
              <Button size="large">Cast Your Vote!</Button>
            </div>
            <div className="art-grid-wrapper">
              <Card.Group stackable="true" centered="true">
                {this.props.reduxState.setArt.map((item) => {
                  return (
                    <Modal closeIcon
                        trigger={
                            <Card>
                                <Image src={item.image_url} />
                                <Card.Content textAlign="right">
                                    <Card.Header>{item.title}</Card.Header>
                                    <Card.Description>{item.artist}</Card.Description>
                                </Card.Content>
                            </Card>
                    }>
                        <Modal.Content image className="artwork-popup">
                            <Image wrapped-size="medium" src={item.image_url}/>
                            <Header>{item.title}</Header>
                            <p>by {item.artist}</p>
                        </Modal.Content>
                    </Modal>
                  );
                })}
              </Card.Group>
              
            </div>
            <div className="vote-button">
              <Button size="large">Cast Your Vote!</Button>
            </div>
          </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(LandingPage);