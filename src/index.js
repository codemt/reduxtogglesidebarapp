import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';
import Main from './Router';

ReactDOM.render( <Main />, document.getElementById('root'));
registerServiceWorker();
