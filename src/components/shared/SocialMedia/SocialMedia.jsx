import React from 'react';
import './SocialMedia.css';
import fbIcon from '../../../assets/icons/facebook-icon.png';
import instagramIcon from '../../../assets/icons/Active-Instagram-1-icon.png';
import emailIcon from '../../../assets/icons/mail-back.png';

const SocialMedia = () => {
  return (
    <React.Fragment>
      <div className="SocialMediaWrapper">
        <h3>Social Media links</h3>
        <div>
          <img
            src="https://via.placeholder.com/32"
            alt="email icon"
            height="32"
            width="32"
          />
        </div>

        <div>
          <img
            src="https://via.placeholder.com/32"
            alt="email icon"
            height="32"
            width="32"
          />
        </div>
        <div>
          <img
            src="https://via.placeholder.com/32"
            alt="email icon"
            height="32"
            width="32"
          />
        </div>
      </div>
    </React.Fragment>
  );
};

export default SocialMedia;
