import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './actions/sidebartoggleActions';
class Main extends Component {
  render() {
    return (
        <Provider store={store}>
        <Router>
            <div>
                    <Route path='/' exact strict component={App} />

            </div>
        </Router>
        </Provider>
    );
  }
}

export default Main;
