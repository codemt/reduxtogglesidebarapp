import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './actions/sidebartoggleActions'
import FirstDashboard from './_layouts/views/firstDashboard';
import SecondDashboard from './_layouts/views/secondDashboard';
import ThirdDashboard from './_layouts/views/thirdDashboard';
import FourthDashboard from './_layouts/views/fourthDashboard';
class Main extends Component {
  render() {
    return (
        <Provider store={store}>
          <Router>
              <div>
                     <App />
                     <Route path='/overview1' exact strict component={FirstDashboard} />
                     <Route path='/overview2' exact strict component={SecondDashboard} />
                     <Route path='/overview3' exact strict component={ThirdDashboard} />
                     <Route path='/overview4' exact strict component={FourthDashboard} />
              </div>
          </Router>
        </Provider>
    );
  }
}

export default Main;
