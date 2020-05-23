import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { DateTime } from '../../components';
import { SocialMedia } from '../../components';
const randImageSector = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};
const Footer = () => {
  const bgImageRand = `bgImage-${randImageSector(6, 10)}`;
  const bgImageRandTwo = `bgImage-${randImageSector(6, 10)}`;

  console.log(bgImageRand, bgImageRandTwo);

  return (
    <React.Fragment>
      <footer className="footerWrapper">
        <div className="imageWrapper">
          <div className={bgImageRand}></div>
          <div className="bgImage-2"></div>
          <div className="bgImage-3"></div>
          <div className="bgImage-4"></div>
          <div className="bgImage-5"></div>
          <div className={bgImageRandTwo}></div>
        </div>

        <div className="footerInnerWrapper">
          <div className="footerContent">
            <div className="addressWrapper">
              <h3>Contact Details</h3>
              <p>Address</p>
              <p>XX The Oval</p>
              <p>Guildford</p>
              <p>GU1 XXX</p>
              <p>Contact number</p>
              <p>
                Email: <a href="mailto:katevictoriabeauty9@gmail.com">Kate</a>
              </p>
            </div>
          </div>

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
                <Link to={'/faq'}>FQA's</Link>
              </li>
              <li>
                <Link to={'/gallery'}>gallery</Link>
              </li>
              <li>
                <Link to={'/contact'}>Contact</Link>
              </li>
            </ul>
          </div>

          <div className="footerContent">
            <div>
              <h3>Social media</h3>
              <SocialMedia />
            </div>
          </div>
        </div>

        <div className="footerInnerWrapper footerWrapper">
          <div className="footerContent">Kate Victoria Beauty &copy;</div>
          <div className="footerContent">
            <DateTime />
          </div>
          <div className="footerContent">
            <span>
              <Link to={'/terms-and-conditions'}>Terms & Conditions</Link> |
              <a href="https://wwww.trilogywebsolutions.co.u">
                Trilogy Web Solutions
              </a>
            </span>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
