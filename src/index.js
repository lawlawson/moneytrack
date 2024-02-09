import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { AuthoContextProvider } from './context/AuthContext';

ReactDOM.render(
  <React.StrictMode>
    <AuthoContextProvider>
      <App />
    </AuthoContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
