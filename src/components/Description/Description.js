import React, { Component } from "react";
import { Segment } from "semantic-ui-react";

class Description extends Component {
  render() {
    return (
      <Segment raised>
        Art is often the context that helps us understand who we are and where
        our common ground is. This year, I encourage students to think about our
        shared country when making their piece. What is America to you?
        <ul>
          <li>
            Visual art competition open to all high schoolers in Minnesota’s
            Fifth District
          </li>
          <li>Voting is open to MN05 residents May 27 through June 2 </li>
          <li>
            Winning submission will get two plane tickets to Washington, DC and
            have their work displayed in the US Capitol for one year
          </li>
          <li>
            On May 5, 2020, we will gather for a reception in honor of these
            brilliant young artists and announce the winners.
          </li>
        </ul>
        Click on the "Cast Your Vote" button below to choose your favorite
        pieces!
      </Segment>
    );
  }
}

export default Description;
