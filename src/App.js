import React from 'react';
import './App.css';
import { Header, Home, Footer } from './components';

const App = () => {
  return (
    <React.Fragment>
      <div className="container">
        <Header />
        <h1>App comp</h1>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default App;
