import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router } from '@reach/router';
import Landing from './pages/landing/landing';
import NewGame from './pages/newGame/NewGame';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Landing path="/" />
      <NewGame path="/newGame" />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
