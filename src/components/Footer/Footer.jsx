import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
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
          <div className="footerContent">
            <ul className="footerNavLinks navLinksWrapper">
              <h3>Links</h3>
              <li>
                <Link to={'/home'}>Home</Link>
              </li>
              <li>
                <Link to={'/about'}>About</Link>
              </li>
              <li>
                <Link to={'/faq'}>FQA</Link>
              </li>
              <li>
                <Link to={'/contact'}>Contact</Link>
              </li>
            </ul>
          </div>
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
