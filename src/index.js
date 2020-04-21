import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Router } from '@reach/router';
import Landing from './pages/landing/landing';
import NewGame from './pages/newGame/NewGame';
import Trivia from './pages/trivia/Trivia';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Landing path="/" />
      <NewGame path="/newGame" />
      <Trivia path="/trivia" />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
