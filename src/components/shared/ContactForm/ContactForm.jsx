import React, { useState } from 'react';
import styles from './ContactForm.module.css';
import { postContactForm } from '../../../api';

const ContactForm = () => {
  const [name, SetName] = useState('');
  const [email, SetEmail] = useState('');
  const [message, SetMessage] = useState('');
  const [thankYou, SetThankYou] = useState('');

  const submitFormData = async (formData) => {
    try {
      await postContactForm(JSON.stringify(formData));
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = { name: name, email: email, message: message };
    submitFormData(formData);
    SetThankYou('Thank you. I will contact you shortly. Kate');
    setInterval(() => {
      SetThankYou('');
    }, 6000);

    SetName('');
    SetEmail('');
    SetMessage('');
  };

  return (
    <React.Fragment>
      <div className={styles.contactFormWrapper}>
        <div className={styles.formInputWrapper}>
          <form onSubmit={handleSubmit}>
            <div>
              <label>* Name</label>
              <input
                type="text"
                value={name}
                name="name"
                onChange={(e) => SetName(e.target.value)}
                required
              />
            </div>
            <div>
              <label>* Email Address</label>
              <input
                className={styles.input}
                type="email"
                value={email}
                name="email"
                onChange={(e) => SetEmail(e.target.value)}
                required
              />
            </div>
            <div>
              <label>Message</label>
              <textarea
                value={message}
                name="message"
                onChange={(e) => SetMessage(e.target.value)}
              ></textarea>
            </div>
            <button type="submit" value="submit" disabled={!name || !email}>
              SUBMIT
            </button>
            <div className={styles.textSmall}>
              {!name || !email ? 'Name and Email are required.' : null}
            </div>
          </form>
        </div>
        <div className={styles.text}>
          <div className={styles.thankYou}>{thankYou}</div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default ContactForm;
