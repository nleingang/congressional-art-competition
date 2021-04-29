import React, { Component } from "react";
import { Segment } from "semantic-ui-react";

class Description extends Component {
  render() {
    return (
      <Segment raised>
        Every year since 1982, each U.S. Representative selects a piece of
        visual art to represent their district on display in the U.S. Capitol. I
        love this competition – art is often the context that helps us
        understand who we are and where our common ground is. 
        <br></br>
        <br></br>
        Voting is open to MN05 residents May 1
        through 15. We will announce the winner after voting has closed.
        <br></br>
        <br></br>
        Click on the "Cast Your Vote" button below to choose your favorite
        pieces!
      </Segment>
    );
  }
}

export default Description;
