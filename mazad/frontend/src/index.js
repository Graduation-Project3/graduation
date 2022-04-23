import React from 'react';
import ReactDOM from 'react-dom';
import RegisterProvider from './contexts/signUp';
import LoginProvider from './contexts/signIn';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  BrowserRouter
} from "react-router-dom";
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <LoginProvider>
        <RegisterProvider>
          <App />
        </RegisterProvider>
      </LoginProvider>
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);

