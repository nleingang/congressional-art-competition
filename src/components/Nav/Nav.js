import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import NavLinks from '../NavLinks/NavLinks';
import logo from './logo_0.png';
import './Nav.css';

const Nav = (props) => (
  <div className="nav">
    <div className="logo-img-wrapper">
      <a to="https://omar.house.gov/">
        <img src={logo} alt="Representative Ilhan Omar" class="nav-logo" />
      </a>
    </div>
    <div className="nav-right">
      <ul className="nav-links-ul">
        <NavLinks responsive="nav-link"/>
      </ul>
    </div>
  </div>
);

// Instead of taking everything from state, we just want the user
// object to determine if they are logged in
// if they are logged in, we show them a few more links 
// if you wanted you could write this code like this:
// const mapStateToProps = ({ user }) => ({ user });
const mapStateToProps = state => ({
  user: state.user,
});

export default connect(mapStateToProps)(Nav);
