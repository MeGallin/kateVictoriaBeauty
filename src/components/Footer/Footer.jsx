import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { DateTime } from '../../components';
import { SocialMedia } from '../../components';
import makeUpPlaceHolder from '../../assets/images/makeUp-temp.png';

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footerWrapper">
        <div className="imageWrapper">
          <div>
            <img
              className="imgResponsive"
              src={makeUpPlaceHolder}
              alt="email icon"
            />
          </div>
          <div>
            <img
              className="imgResponsive"
              src={makeUpPlaceHolder}
              alt="email icon"
            />
          </div>
          <div>
            <img
              className="imgResponsive"
              src={makeUpPlaceHolder}
              alt="email icon"
            />
          </div>
          <div>
            <img
              className="imgResponsive"
              src={makeUpPlaceHolder}
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
            <span>
              <Link to={'/terms-and-conditions'}>Terms & Conditions</Link> |
              <a href="https://wwww.trilogywebsolutions.co.u">
                Trilogy Web Solutions
              </a>
            </span>
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
