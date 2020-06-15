import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App';
import {Router} from "react-router-dom";

import history from "./helpers/history";

ReactDOM.render(
  <React.StrictMode>
    <Router history={history}>
      <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
