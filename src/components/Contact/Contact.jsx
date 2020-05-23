import React from 'react';
import './Contact.css';
import { ContactForm } from '../../components';
import makeUpPlaceHolder from '../../assets/images/img-8.png';

const Contact = () => {
  return (
    <React.Fragment>
      <section>
        <h1>Contact form</h1>
        <div className="contactWrapper">
          <div className="innerContactWrapper">
            <div>
              <ContactForm />
            </div>

            <div className="contentWrapper">
              <div>
                <h3>Contact details</h3>
                <p>Address</p>
                <p>XX The Oval</p>
                <p>Guildford</p>
                <p>GU1 XXX</p>
                <p>Contact number</p>
                <p>
                  Email: <a href="mailto:katevictoriabeauty9@gmail.com">Kate</a>
                </p>
              </div>
              <div className="imageDimensions">
                <img
                  className="imgResponsive"
                  src={makeUpPlaceHolder}
                  alt="email icon"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Contact;
