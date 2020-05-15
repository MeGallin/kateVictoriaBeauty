import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import {
  Header,
  Home,
  Contact,
  Faq,
  About,
  Error404,
  Footer,
} from './components';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Header />
          <Switch>
            <Route path="/" exact={true}>
              <Redirect to="/home" />
            </Route>
            <Route path="/home" exact={true} component={Home} />
            <Route path="/contact" exact={true} component={Contact} />
            <Route path="/faq" exact={true} component={Faq} />
            <Route path="/about" exact={true} component={About} />
            <Route component={Error404} />
          </Switch>
          <Footer />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
