import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Router> 
    <App />
    </Router> 
  </React.StrictMode>,
  document.getElementById('root')
);


