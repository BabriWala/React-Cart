import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from "react-router-dom";
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>
    <Router>
    <App />
    </Router>
  </React.StrictMode>
  
);

// Ei Code Tuku Run Korle Error Asbe karon render to kono in-built function na js er to render asse kota tike eita asse react-dom tike
// render(
//   <h1>Welcome To My World</h1>,
//   document.getElementById('root'),
// );

// ekon eita kaj korbe
// ReactDOM.render(
//   <h1>Welcome To My World</h1>,
//   document.getElementById('root'),
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
