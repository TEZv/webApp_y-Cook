import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// To start measuring performance in the app, it need to pass a function

// to log results 
//(e.g.: 
//.....................
//reportWebVitals(console.log))
//.....................
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
