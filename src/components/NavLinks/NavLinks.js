import React from 'react';
import { connect } from 'react-redux';

const NavLinks = (props) => (
    <>
        <a href="https://omar.house.gov/about" className={props.responsive}>
          <li>About</li>
        </a>
        <a href="https://omar.house.gov/contact" className={props.responsive}>
          <li>Contact</li>
        </a>
        <a href="https://omar.house.gov/issues" className={props.responsive}>
          <li>Issues</li>
        </a>
        <a href="https://omar.house.gov/media" className={props.responsive}>
          <li>Media</li>
        </a>
        <a href="https://omar.house.gov/services" className={props.responsive}>
          <li>Services</li>
        </a>
        <a href="https://omar.house.gov/coronavirus" className={props.responsive}>
          <li>Coronavirus</li>
        </a>
    </>
);

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(NavLinks);