// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals'; 

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Если хотите измерять производительность вашего приложения, передайте функцию
// для логирования результатов (например: reportWebVitals(console.log))
// или отправляйте в аналитическую конечную точку. Узнайте больше: https://bit.ly/CRA-vitals
reportWebVitals();
