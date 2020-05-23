import React from 'react';
import './SocialMedia.css';
import instagramIcon from '../../../assets/icons/Active-Instagram-1-icon.png';
import faceBookIcon from '../../../assets/icons/facebook-icon.png';

const SocialMedia = () => {
  return (
    <React.Fragment>
      <div className="SocialMediaWrapper">
        <div>
          <a
            href="https://www.instagram.com/katevictoriabeauty/?hl=en"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              title="instagram"
              src={instagramIcon}
              alt="email icon"
              height="48"
              width="48"
            />
          </a>
        </div>

        <div>
          <a
            href="https://m.facebook.com/KateVictoriaBeauty9/"
            rel="noopener noreferrer"
            target="_blank"
          >
            <img
              title="facebook"
              src={faceBookIcon}
              alt="email icon"
              height="48"
              width="48"
            />
          </a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default SocialMedia;
