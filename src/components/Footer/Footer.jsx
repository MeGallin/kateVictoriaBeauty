import React from 'react';
import styles from './Footer.module.css';
import { DateTime } from '../../components';
import { SocialMedia } from '../../components';

const Footer = () => {
  return (
    <React.Fragment>
      <footer className={styles.footerWrapper}>
        <div className={styles.imageWrapper}>
          <div>
            <img
              className={styles.imgResponsive}
              src="https://via.placeholder.com/180"
              alt="email icon"
            />
          </div>
          <div>
            <img
              className={styles.imgResponsive}
              src="https://via.placeholder.com/180"
              alt="email icon"
            />
          </div>
          <div>
            <img
              className={styles.imgResponsive}
              src="https://via.placeholder.com/180"
              alt="email icon"
            />
          </div>
          <div>
            <img
              className={styles.imgResponsive}
              src="https://via.placeholder.com/180"
              alt="email icon"
            />
          </div>
        </div>
        <div className={styles.footerInnerWrapper}>
          <div className={styles.footerContent}>contact form</div>
          <div className={styles.footerContent}>LINKS</div>
          <div className={styles.footerContent}>
            <SocialMedia />
          </div>
        </div>

        <div className={styles.tcWrapper}>
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
