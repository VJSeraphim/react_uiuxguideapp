import React from 'react';

import './Newsletter.css';
import SubHeading from '../SubHeading/SubHeading'

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="newsletter"/>
      <h1 className="headtext__cormorant">
        Subscribe to our Newsletter!
      </h1>
      <p className="p__opensans">
        Lorem Ipsum
      </p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Enter your email address here." />
      <button type="button" className="custom__button">
        Subscribe
      </button>
    </div>
  </div>
);

export default Newsletter;
