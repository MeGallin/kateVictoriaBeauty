import React from 'react';
import './Error404.css';
import { Link } from 'react-router-dom';

const Error404 = ({ location }) => {
  return (
    <React.Fragment>
      <div className="errorWrapper">
        <h1>ERROR! That {location.pathname} does not exist.</h1>
        <Link className="links" to={'/home'}>
          <h3>Go Home here!</h3>
        </Link>
      </div>
    </React.Fragment>
  );
};
export default Error404;
