import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import LogOutButton from '../LogOutButton/LogOutButton';
import logo from './logo_0.png';
import './Nav.css';

const Nav = (props) => (
  <div className="nav">
    <div className="logo-img-wrapper">
      <Link to="/">
        <img src={logo} alt="Representative Ilhan Omar" class="nav-logo" />
      </Link>
    </div>
    <div className="nav-right">
      <ul>
        <li>About</li>
        <li>Contact</li>
        <li>Issues</li>
        <li>Media</li>
        <li>Services</li>
        <li>Coronavirus</li>
      </ul>
      <a class="ft-social">
        <ul class="ft-social-list">
          <li>
            <a href="https://twitter.com/Ilhan">
              <i class="fa fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-facebook"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-youtube"></i>
            </a>
          </li>
          <li>
            <a href="#">
              <i class="fa fa-instagram"></i>
            </a>
          </li>
        </ul>
      </a>
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
