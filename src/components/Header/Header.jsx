import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
  const [open, SetOpen] = useState(false);

  return (
    <React.Fragment>
      <header>
        <nav>
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
              <Link onClick={() => SetOpen(!open)} to={'/contact'}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </React.Fragment>
  );
};

export default Header;
