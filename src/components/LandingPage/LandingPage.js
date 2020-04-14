import React, { Component } from "react";
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { Card, Image, Button, Modal, Header } from "semantic-ui-react";

import { connect } from "react-redux";

import './LandingPage.css';

//components
import VoteButtonModal from '../VoteButtonModal/VoteButtonModal';

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
              <VoteButtonModal />
            </div>
            <div className="art-grid-wrapper">
              <Card.Group stackable="true" centered="true">
                {this.props.reduxState.setArt.map((item) => {
                  return (
                    <Card>
                      <Image src={item.image_url} />
                      <Card.Content textAlign="right">
                        <Card.Header>{item.title}</Card.Header>
                        <Card.Description>{item.artist}</Card.Description>
                      </Card.Content>
                    </Card>
                  );
                })}
              </Card.Group>
            </div>
            <div className="vote-button">
              <VoteButtonModal />
            </div>
          </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
  reduxState,
});

export default connect(mapReduxStateToProps)(LandingPage);