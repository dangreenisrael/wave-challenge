import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

if (process.env.NODE_ENV !== 'test') {
  ReactDOM.render(<App />, document.getElementById('root'));
}
