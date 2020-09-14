import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import isAuthContext from './Coding_1/ApiMain'

ReactDOM.render(
  <isAuthContext>
    <App />
  </isAuthContext>,
  document.getElementById('root')
);

serviceWorker.unregister();
