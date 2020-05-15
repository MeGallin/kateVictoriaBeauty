import React, { useState } from 'react';
import './Faq.css';

const Faq = () => {
  const [id, SetId] = useState(1);
  const toggle = (id) => {
    SetId(id);
  };

  return (
    <React.Fragment>
      <section>
        <h1>Frequently Asked Questions</h1>
        <div className="fnqWrapper">
          <div
            className={id === 1 ? 'question' : 'question fade'}
            onClick={() => toggle(1)}
          >
            Do you travel for bookings?
          </div>

          <div className="answer">
            {id === 1 ? (
              <React.Fragment>
                <div className="answerInner">
                  Yes I do, I cover Surrey, London and Hampshire. If you require
                  me to travel further then please contact me.
                </div>
              </React.Fragment>
            ) : null}
          </div>

          <div
            className={id === 2 ? 'question' : 'question fade'}
            onClick={() => toggle(2)}
          >
            Do you require a deposit?
          </div>
          <div className={id ? 'answer' : null}>
            {id === 2 ? (
              <React.Fragment>
                <div className="answerInner">
                  Yes I require a 50% deposit to secure all bookings. Please see
                  terms and conditions in regards to deposits and cancellations.
                </div>
              </React.Fragment>
            ) : null}
          </div>

          <div
            className={id === 3 ? 'question' : 'question fade'}
            onClick={() => toggle(3)}
          >
            How long does Makeup application take?
          </div>
          <div className={id ? 'answer' : null}>
            {id === 3 ? (
              <React.Fragment>
                <div className="answerInner">
                  Depending on the look between 45-90 minutes.
                </div>
              </React.Fragment>
            ) : null}
          </div>

          <div
            className={id === 4 ? 'question' : 'question fade'}
            onClick={() => toggle(4)}
          >
            Are you available on sundays?
          </div>
          <div className={id ? 'answer' : null}>
            {id === 4 ? (
              <React.Fragment>
                <div className="answerInner">
                  Yes I am available on Sundays upon request. Please contact me
                  at katevictoriabeauty9@gmail.com for availabilities. Please
                  note prices vary for Sunday bookings.
                </div>
              </React.Fragment>
            ) : null}
          </div>

          <div
            className={id === 5 ? 'question' : 'question fade'}
            onClick={() => toggle(5)}
          >
            Do you offer airbrushing as a service?
          </div>
          <div className={id ? 'answer' : null}>
            {id === 5 ? (
              <React.Fragment>
                <div className="answerInner">
                  I do not offer airbrushing as a service, only traditional
                  makeup application.
                </div>
              </React.Fragment>
            ) : null}
          </div>

          <div
            className={id === 6 ? 'question' : 'question fade'}
            onClick={() => toggle(6)}
          >
            If I get my makeup done in the morning will it also last until my
            event at night time?
          </div>
          <div className={id ? 'answer' : null}>
            {id === 6 ? (
              <React.Fragment>
                <div className="answerInner">
                  Yes definitely, I use a range or professional, long wear
                  products and I use techniques to ensure your makeup will last
                  all day and night.
                </div>
              </React.Fragment>
            ) : null}
          </div>

          <div
            className={id === 7 ? 'question' : 'question fade'}
            onClick={() => toggle(7)}
          >
            How far in advance do you take bridal bookings?
          </div>
          <div className={id ? 'answer' : null}>
            {id === 7 ? (
              <React.Fragment>
                <div className="answerInner">
                  I take bridal bookings up to one year in advance.
                </div>
              </React.Fragment>
            ) : null}
          </div>

          <div
            className={id === 8 ? 'question' : 'question fade'}
            onClick={() => toggle(8)}
          >
            Do I need to book a bridal trial?
          </div>
          <div className={id ? 'answer' : null}>
            {id === 8 ? (
              <React.Fragment>
                <div className="answerInner">
                  You do not have to book in for a bridal trial however they are
                  recommended.
                </div>
              </React.Fragment>
            ) : null}
          </div>

          <div
            className={id === 9 ? 'question' : 'question fade'}
            onClick={() => toggle(9)}
          >
            What products do you use?
          </div>
          <div className={id ? 'answer' : null}>
            {id === 9 ? (
              <React.Fragment>
                <div className="answerInner">
                  use a range of different brands to stock my makeup kit. Some
                  of them include Nars, MAC, Charlotte Tilbury, Armani Beauty,
                  Too Faced, Urban Decay cosmetics, Hourlgass cosmetics,
                  Anastasia beverly hills, Natasha Denona, Morphe, Tarte, Laura
                  Mercier and many more.
                </div>
              </React.Fragment>
            ) : null}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Faq;
