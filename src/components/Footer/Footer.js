import React from 'react';
import './Footer.css';
import logo from './logo_0.png';

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const Footer = () => (
  <footer>

    <section class="ft-logo">
      <div>
        <a href="https://omar.house.gov/" title="Representative Ilhan Omar.">
          <img src={logo} alt="Representative Ilhan Omar." class="logo"/>
        </a>
      </div>
    </section>

    <section class="ft-main">
      
    </section>

    <section class="ft-social">
      <ul class="ft-social-list">
          <li><a href="https://twitter.com/Ilhan"><i class="fa fa-twitter" title="Visit Ilhan on Twitter."></i></a></li>
          <li><a href="http://www.facebook.com/RepIlhan/"><i class="fa fa-facebook" title="Visit RepIlhan on Facebook."></i></a></li>
          <li><a href="http://www.youtube.com/channel/UC4meVUkgJUxyHE5CifWAumQ"><i class="fa fa-youtube" title="Visit RepIlhan on YouTube."></i></a></li>
          <li><a href="http://instagram.com/repilhan/"><i class="fa fa-instagram" title="Visit repilhan on Instagram."></i></a></li>
        </ul>
    </section>
  </footer>
);

export default Footer;
