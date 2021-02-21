import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.render(
  <Auth0Provider 
  domain='dev-qis32-84.us.auth0.com'
  clientId='ajG34zVt4aOJ2ekaEWwBY40y2XozQozF'
  redirectUri={window.location.origin}>
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);


