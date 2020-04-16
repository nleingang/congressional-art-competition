import React, { Component } from "react";
// import {
//   HashRouter as Router,
//   Route,
//   Redirect,
//   Switch,
// } from "react-router-dom";
import { Card, Button } from "semantic-ui-react";
import ModalCard from "../ModalCard/ModalCard";

import { connect } from "react-redux";

import './LandingPage.css';

//components
import VoteButtonModal from '../VoteButtonModal/VoteButtonModal';
import ArtCard from '../ArtCard/ArtCard';

class LandingPage extends Component {
    componentDidMount() {
      this.props.dispatch({
          type: "GET_ALL_ART"
      });
    }

    

    checkIfClicked = () => {

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
                  if(this.props.reduxState.voteMode){
                    return (
                        <ArtCard item={item} />
                    );
                  } else {
                    return (
                      <ModalCard item={item}/>
                    );
                  }
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