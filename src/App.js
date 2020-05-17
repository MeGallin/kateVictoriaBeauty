import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  HashRouter,
} from 'react-router-dom';
import {
  Header,
  Home,
  Contact,
  Faq,
  About,
  Error404,
  Footer,
  TermsAndConditions,
  Gallery,
} from './components';

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Header />
          <Switch>
            <Route path="/home" exact={true} component={Home} />
            <Route path="/" exact={true}>
              <Redirect to="/home" />
            </Route>
            <Route path="/about" exact={true} component={About} />
            <Route path="/faq" exact={true} component={Faq} />

            <Route path="/gallery" exact={true} component={Gallery} />
            <Route path="/contact" exact={true} component={Contact} />
            <Route
              path="/terms-and-conditions"
              exact={true}
              component={TermsAndConditions}
            />
            <Route path="**" component={Error404} />
          </Switch>
          <Footer />
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
