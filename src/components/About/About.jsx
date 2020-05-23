import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import imageKate from '../../assets/images/img-8.png';

const About = () => {
  return (
    <React.Fragment>
      <section>
        <h1>About Me</h1>
        <div className="aboutWrapper">
          <div className="innerWrapperText">
            <p>My name Is Kate Victoria,</p>
            <p>
              I am a professional Makeup artist with over 4 years experience in
              the industry. I graduated the DFMA London course in fashion, TV
              and media in 2017 and have worked with a variety of well respected
              brands.{' '}
            </p>
            <p>
              I specialise in bridal, special occasions and photoshoots. I am
              extremely passionate about what I do and would love to hear from
              you whatever the occasion.
            </p>
            <p>
              My style is all about creating the best of you, by enhancing your
              natural beauty and making you feel empowered using makeup to
              highlight rather than hide. When I show someone in the mirror what
              they look like after I have finished their makeup it is the best
              feeling in the world{' '}
            </p>
            <p>
              Due to popular demand I now also offer makeup lessons and
              tutorials so I can help clients feel confident and happy when
              applying their own makeup every day. This is also a great option
              for brides getting married abroad.
            </p>
            <p>
              I am based in Surrey covering London, but am often found traveling
              all over the UK to create beautiful makeup looks.
            </p>

            <p>
              If you want to find out more about makeup you can head straight
              over to my <a href="#">blog</a> . Where I will be talking about
              the latest projects I have been working on and what new products I
              am obsessing over right now.
            </p>
            <p>
              Please feel free to <Link to={'/contact'}>contact</Link> me
              whatever the occasion, I look forward to hearing from you and
              helping you in any way I can!
            </p>
            <p>Best wishes,</p>
            <p>Kate Victoria xo</p>
          </div>
          <div className="innerWrapperImage">
            <img
              className="imgResponsive"
              src={imageKate}
              alt="Kate Victoria"
            />
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default About;
