import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';

const Header = () => {
  const [open, SetOpen] = useState(false);

  return (
    <React.Fragment>
      <header>
        <nav>
          <div className="navWrapper">
            <div className="logo">
              <Link to={'/home'}>
                <img
                  src={logo}
                  alt="Kate Victoria Beauty"
                  height="50"
                  width="208"
                />
              </Link>
            </div>
            <div className="hamburger" onClick={() => SetOpen(!open)}>
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </div>

            <ul className={open ? 'navLinks open' : 'navLinks'}>
              <li>
                <Link onClick={() => SetOpen(!open)} to={'/home'}>
                  Home
                </Link>
              </li>
              <li>
                <Link onClick={() => SetOpen(!open)} to={'/about'}>
                  About
                </Link>
              </li>
              <li>
                <Link onClick={() => SetOpen(!open)} to={'/faq'}>
                  FQA's
                </Link>
              </li>
              <li>
                <Link onClick={() => SetOpen(!open)} to={'/gallery'}>
                  Gallery
                </Link>
              </li>
              <li>
                <Link onClick={() => SetOpen(!open)} to={'/contact'}>
                  Contact
                </Link>
              </li>
            </ul>
            {/* <div className="logo"></div> */}
          </div>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default Header;
