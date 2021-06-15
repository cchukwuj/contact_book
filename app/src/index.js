import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';


ReactDOM.render(
  <Auth0Provider 
    domain = 'dev-koh6y4tr.us.auth0.com'
    clientId = 'CgDjxbDRuRXpyILdHSzz9B9KqxIK9MX9'
    redirectUri = 'http://localhost:3000/home'
    >
    <App />

  </Auth0Provider>,

    document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
