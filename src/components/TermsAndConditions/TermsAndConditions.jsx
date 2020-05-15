import React from 'react';
import './TermsAndConditions.css';

const TermsAndConditions = () => {
  return (
    <React.Fragment>
      <section>
        <h1>Terms and Conditions</h1>
        <div className="termsWrapper">
          <h3>1.0 Bookings</h3>
          <p>
            1.0.1 Clients arriving to their appointment later than 15 minutes
            will have their appointment rescheduled for the next available
            appointment time on the day. In the event there are no remaining
            appointment times available the appointment will be cancelled.
          </p>
          <h3>1.1 Deposits</h3>
          <p>
            1.1.1 Upon checkout I require a 50% non-refundable deposit to secure
            your booking. Deposits are strictly non-refundable under any
            circumstances.
          </p>
          <h3>1.2 Cancellations</h3>
          <p>
            1.2.1 Bookings cancelled with more than 48 hours notice are given
            the opportunity to reschedule their appointment using their existing
            deposit.
          </p>
          <p>
            1.2.2 Bookings cancelled with less than 48 hours notice will NOT
            receive the opportunity to reschedule using their existing deposit.
          </p>
          <h3>1.3 Personal Hygiene</h3>
          <p>
            1.3.1 Makeup application will be refused if the client arrives to
            their appointment with any of the following; Cold sores, Eye
            Infections and General Facial Infections. Please notify Isabella
            Quinn via email prior to the appointment if you have any concerns.
          </p>
          <h3>1.4 Bridal Bookings</h3>
          <p>
            1.4.1 Bridal Deposits shall be paid within 48 hours following a
            bridal trial appointment to secure the date.
          </p>
          <p>
            1.4.2 Bridal bookings requested without a bridal trial appointment;
            deposits shall be paid in full within 48 hours of enquiry to secure
            the date.
          </p>
          <p>
            1.4.3 Bridal deposits are non-refundable and non-transferrable under
            any circumstances.
          </p>
          <p>
            1.4.4 Bridal bookings must include location and start time when
            securing your booking.
          </p>
        </div>
      </section>
    </React.Fragment>
  );
};
export default TermsAndConditions;
