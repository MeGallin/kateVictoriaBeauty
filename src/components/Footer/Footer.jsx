import React from 'react';
import './Footer.css';
import { DateTime } from '../../components';
import { SocialMedia } from '../../components';

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footerWrapper">
        <div className="imageWrapper">
          <div>
            <img
              className="imgResponsive"
              src="https://via.placeholder.com/180"
              alt="email icon"
            />
          </div>
          <div>
            <img
              className="imgResponsive"
              src="https://via.placeholder.com/180"
              alt="email icon"
            />
          </div>
          <div>
            <img
              className="imgResponsive"
              src="https://via.placeholder.com/180"
              alt="email icon"
            />
          </div>
          <div>
            <img
              className="imgResponsive"
              src="https://via.placeholder.com/180"
              alt="email icon"
            />
          </div>
        </div>
        <div className="footerInnerWrapper">
          <div className="footerContent">contact form</div>
          <div className="footerContent">LINKS</div>
          <div className="footerContent">
            <SocialMedia />
          </div>
        </div>

        <div className="tcWrapper">
          <div>Kate Victoria Beauty &copy;</div>
          <div>
            <span>Privacy Policies | Terms & Conditions</span>
          </div>
        </div>
        <div>
          <DateTime />
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
