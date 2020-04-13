import React from 'react';
import './Footer.css'

// This is one of our simplest components
// It doesn't have local state, so it can be a function component.
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is, so it doesn't need 'connect()'

const Footer = () => (
  <footer>

    <section class="ft-logo">
      <div>
        <a href="https://omar.house.gov/" title="Representative Ilhan Omar.">
          <img src="https://omar.house.gov/sites/omar.house.gov/files/logo_0.png" alt="Representative Ilhan Omar." class="logo"/>
        </a>
      </div>
    </section>

    <section class="ft-main">
      <div>
      </div>
    </section>

    <section class="ft-social">
      <ul class="ft-social-list">
          <li><a href="https://twitter.com/Ilhan"><i class="fa fa-twitter"></i></a></li>
          <li><a href="#"><i class="fa fa-facebook"></i></a></li>
          <li><a href="#"><i class="fa fa-youtube"></i></a></li>
          <li><a href="#"><i class="fa fa-instagram"></i></a></li>
        </ul>
    </section>

    <section class="ft-legal">
      <p>
        &copy; Prime Digital Academy
      </p>
    </section>
  </footer>
);

export default Footer;
