import React from 'react';
import styles from './SocialMedia.module.css';
import fbIcon from '../../../assets/icons/facebook-icon.png';
import instagramIcon from '../../../assets/icons/Active-Instagram-1-icon.png';
import emailIcon from '../../../assets/icons/mail-back.png';

const SocialMedia = () => {
  return (
    <React.Fragment>
      <div className={styles.SocialMediaWrapper}>
        <img
          src="https://via.placeholder.com/32"
          alt="email icon"
          height="32"
          width="32"
        />
        <img
          src="https://via.placeholder.com/32"
          alt="FaceBook Icon"
          height="32"
          width="32"
        />
        <img
          src="https://via.placeholder.com/32"
          alt="instagram Icon"
          height="32"
          width="32"
        />
      </div>
    </React.Fragment>
  );
};

export default SocialMedia;
